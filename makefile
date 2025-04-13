# Makefile for Strapi/Nuxt project management

# Default shell for executing commands
SHELL := /bin/bash

# ==============================
# Environment Variables
# ==============================
DOMAIN_FRONTEND ?= olalao-jeanne.fr
DOMAIN_BACKEND ?= api.olalao-jeanne.fr
ENV_FILE := .env
DEV_ENV_FILE := .env.dev

# ==============================
# Docker Compose Commands
# ==============================
# Production
DC_PROD := docker-compose -f docker-compose.yml
# Development
DC_DEV := docker-compose -f docker-compose.dev.yml

# ==============================
# Default target
# ==============================
.PHONY: help
help:
	@echo "Available commands:"
	@echo ""
	@echo "Development:"
	@echo "  make dev               - Start development environment"
	@echo "  make dev-build         - Rebuild and start development environment"
	@echo "  make dev-down          - Stop development environment"
	@echo "  make dev-logs          - View development logs"
	@echo ""
	@echo "Production:"
	@echo "  make prod              - Start production environment"
	@echo "  make prod-build        - Rebuild and start production environment"
	@echo "  make prod-down         - Stop production environment"
	@echo "  make prod-logs         - View production logs"
	@echo ""
	@echo "Setup:"
	@echo "  make setup             - Initial project setup (dev & prod)"
	@echo "  make setup-dev         - Setup development environment"
	@echo "  make setup-prod        - Setup production environment"
	@echo "  make install-deps      - Install dependencies"
	@echo ""
	@echo "Certificates:"
	@echo "  make ssl-create        - Create production SSL certificates using certbot"
	@echo "  make ssl-renew         - Renew production SSL certificates"
	@echo ""
	@echo "Cleanup:"
	@echo "  make clean             - Remove all containers, networks, and volumes"
	@echo ""
	@echo "Database:"
	@echo "  make db-backup         - Backup production database"
	@echo "  make db-restore FILE=filename.sql - Restore production database"
	@echo ""

# ==============================
# Development Environment
# ==============================
.PHONY: dev
dev:
	@echo "Starting development environment..."
	@$(DC_DEV) up -d
	@echo "Development environment started. Access at https://localhost"

.PHONY: dev-build
dev-build:
	@echo "Rebuilding development environment..."
	@$(DC_DEV) up -d --build
	@echo "Development environment rebuilt and started. Access at https://localhost"

.PHONY: dev-down
dev-down:
	@echo "Stopping development environment..."
	@$(DC_DEV) down
	@echo "Development environment stopped."

.PHONY: dev-logs
dev-logs:
	@$(DC_DEV) logs -f

# ==============================
# Production Environment
# ==============================
.PHONY: prod
prod:
	@echo "Starting production environment..."
	@$(DC_PROD) up -d
	@echo "Production environment started. Access at https://$(DOMAIN_FRONTEND)"

.PHONY: prod-build
prod-build:
	@echo "Rebuilding production environment..."
	@$(DC_PROD) up -d --build
	@echo "Production environment rebuilt and started. Access at https://$(DOMAIN_FRONTEND)"

.PHONY: prod-down
prod-down:
	@echo "Stopping production environment..."
	@$(DC_PROD) down
	@echo "Production environment stopped."

.PHONY: prod-logs
prod-logs:
	@$(DC_PROD) logs -f

# ==============================
# Setup
# ==============================
.PHONY: setup
setup: setup-dev setup-prod

.PHONY: setup-dev
setup-dev:
	@echo "Setting up development environment..."
	@mkdir -p nginx/conf.d nginx/logs
	@if [ ! -f $(DEV_ENV_FILE) ]; then \
		cp .env.dev.example $(DEV_ENV_FILE); \
		echo "Created $(DEV_ENV_FILE) file from example."; \
	else \
		echo "$(DEV_ENV_FILE) file already exists."; \
	fi
	@echo "Development environment setup completed."

.PHONY: setup-prod
setup-prod:
	@echo "Setting up production environment..."
	@mkdir -p nginx/conf.d nginx/logs
	@if [ ! -f $(ENV_FILE) ]; then \
		cp .env.example $(ENV_FILE); \
		echo "Created $(ENV_FILE) file from example."; \
		echo "IMPORTANT: Remember to update your secrets in $(ENV_FILE)!"; \
	else \
		echo "$(ENV_FILE) file already exists."; \
	fi
	@echo "Production environment setup completed."

.PHONY: install-deps
install-deps:
	@echo "Installing dependencies for backend..."
	cd backend && npm install
	@echo "Installing dependencies for frontend..."
	cd client && npm install
	@echo "Dependencies installed."

# ==============================
# SSL Certificates
# ==============================
.PHONY: ssl-create
ssl-create:
	@echo "Creating SSL certificates using certbot..."
	@read -p "Do you have certbot installed? (y/n): " answer; \
	if [ "$$answer" != "y" ]; then \
		echo "Please install certbot first."; \
		echo "You can usually install it with:"; \
		echo "sudo apt update && sudo apt install certbot python3-certbot-nginx"; \
		exit 1; \
	fi
	@echo "Creating certificates for $(DOMAIN_FRONTEND) and www.$(DOMAIN_FRONTEND)..."
	@sudo certbot --nginx -d $(DOMAIN_FRONTEND) -d www.$(DOMAIN_FRONTEND)
	@echo "Creating certificates for $(DOMAIN_BACKEND)..."
	@sudo certbot --nginx -d $(DOMAIN_BACKEND)
	@echo "SSL certificates created. Testing auto-renewal..."
	@sudo certbot renew --dry-run
	@echo "SSL setup completed."

.PHONY: ssl-renew
ssl-renew:
	@echo "Stopping nginx container to renew certificates..."
	@$(DC_PROD) stop nginx
	@echo "Renewing SSL certificates..."
	@sudo certbot renew
	@echo "Starting nginx container..."
	@$(DC_PROD) start nginx
	@echo "SSL certificates renewed."

# ==============================
# Cleanup
# ==============================
.PHONY: clean
clean:
	@echo "This will remove all containers, networks, and volumes related to this project."
	@read -p "Are you sure you want to continue? (y/n): " answer; \
	if [ "$$answer" != "y" ]; then \
		echo "Cleanup aborted."; \
		exit 1; \
	fi
	@echo "Stopping and removing development environment..."
	@$(DC_DEV) down -v
	@echo "Stopping and removing production environment..."
	@$(DC_PROD) down -v
	@echo "Cleanup completed."

# ==============================
# Database Management
# ==============================
.PHONY: db-backup
db-backup:
	@echo "Creating database backup..."
	@mkdir -p backups
	@TIMESTAMP=$$(date +%Y%m%d_%H%M%S); \
	$(DC_PROD) exec db pg_dump -U $$(grep DATABASE_USERNAME $(ENV_FILE) | cut -d '=' -f2) $$(grep DATABASE_NAME $(ENV_FILE) | cut -d '=' -f2) > backups/backup_$$TIMESTAMP.sql
	@echo "Database backup created in backups/backup_$$(date +%Y%m%d_%H%M%S).sql"

.PHONY: db-restore
db-restore:
	@if [ -z "$(FILE)" ]; then \
		echo "Error: Please specify the backup file using FILE=filename.sql"; \
		exit 1; \
	fi
	@if [ ! -f "$(FILE)" ]; then \
		echo "Error: Backup file $(FILE) does not exist."; \
		exit 1; \
	fi
	@echo "Restoring database from $(FILE)..."
	@$(DC_PROD) exec -T db psql -U $$(grep DATABASE_USERNAME $(ENV_FILE) | cut -d '=' -f2) $$(grep DATABASE_NAME $(ENV_FILE) | cut -d '=' -f2) < $(FILE)
	@echo "Database restored from $(FILE)."