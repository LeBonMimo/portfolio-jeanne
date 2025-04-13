# Makefile Documentation

This document explains how to use the Makefile to manage your Strapi/Nuxt project across development and production environments.

## Getting Started

### Initial Setup

To set up the project for the first time:

```bash
make setup
```

This will:
- Create necessary directories
- Create environment files from templates
- Set up both development and production environments

### Installing Dependencies

To install Node.js dependencies for both backend and frontend:

```bash
make install-deps
```

## Development Workflow

### Starting Development Environment

```bash
make dev
```

This starts all development containers with hot-reloading enabled. Access your application at https://localhost.

### Rebuilding Development Environment

If you've made changes to Dockerfiles or need to rebuild containers:

```bash
make dev-build
```

### Viewing Development Logs

```bash
make dev-logs
```

### Stopping Development Environment

```bash
make dev-down
```

## Production Workflow

### Starting Production Environment

```bash
make prod
```

This starts all production containers. Access your application at https://olalao-jeanne.fr.

### Rebuilding Production Environment

After updates to your code or configuration:

```bash
make prod-build
```

### Viewing Production Logs

```bash
make prod-logs
```

### Stopping Production Environment

```bash
make prod-down
```

## SSL Certificate Management

### Creating SSL Certificates

To create production SSL certificates using Certbot:

```bash
make ssl-create
```

This will:
- Check if Certbot is installed
- Create certificates for your domains
- Test auto-renewal configuration

### Renewing SSL Certificates

To renew your SSL certificates:

```bash
make ssl-renew
```

This will:
- Stop the Nginx container
- Renew certificates with Certbot
- Restart the Nginx container

## Database Management

### Creating a Database Backup

```bash
make db-backup
```

This creates a timestamped backup file in the `backups/` directory.

### Restoring a Database Backup

```bash
make db-restore FILE=backups/backup_20250413_120000.sql
```

Replace the filename with your actual backup file.

## Cleanup

To remove all containers, networks, and volumes associated with the project:

```bash
make clean
```

**Warning**: This will delete all data in Docker volumes. Make sure you have backups before running this command.

## Customizing Environment Variables

You can customize the domain names by setting environment variables:

```bash
DOMAIN_FRONTEND=mydomain.com DOMAIN_BACKEND=api.mydomain.com make prod
```

Alternatively, you can edit the `.env` file directly.

## Troubleshooting

- If development hot-reloading isn't working, try `make dev-build` to rebuild the containers
- For SSL certificate issues, verify that your DNS records are correctly pointing to your server
- If you encounter database connection issues, check the environment variables in your `.env` file
- For permission issues with certbot, make sure you're running with sufficient privileges (sudo may be required)