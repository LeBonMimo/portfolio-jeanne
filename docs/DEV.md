# Development Environment Setup

This guide explains how to set up the development environment for the project using Docker Compose.

## Prerequisites

- Docker and Docker Compose installed on your system
- Git (to clone the repository)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd <your-repository-directory>
   ```

2. Create development environment file:
   ```bash
   cp .env.dev.example .env.dev
   ```

3. Start the development environment:
   ```bash
   docker-compose -f docker-compose.dev.yml up
   ```

   To run in detached mode (background):
   ```bash
   docker-compose -f docker-compose.dev.yml up -d
   ```

4. Access your development services:
    - Frontend (Nuxt): http://localhost:3000
    - Backend (Strapi): http://localhost:1337/admin

## Development Workflow

### Hot Reloading

Both the Nuxt frontend and Strapi backend are configured for hot reloading. Any changes you make to the code will automatically reload the application.

### Database Access

You can connect to the development database directly using your preferred PostgreSQL client:
- Host: localhost
- Port: 5432
- Database: strapi_dev
- Username: strapi_dev
- Password: strapi_dev_password (or as set in your .env.dev file)

### Running Commands Inside Containers

To run commands inside the Docker containers:

```bash
# Strapi (backend)
docker-compose -f docker-compose.dev.yml exec backend-dev sh
# or directly run a command
docker-compose -f docker-compose.dev.yml exec backend-dev npm run strapi generate

# Nuxt (frontend)
docker-compose -f docker-compose.dev.yml exec client-dev sh
# or directly run a command
docker-compose -f docker-compose.dev.yml exec client-dev npm run generate
```

### Viewing Logs

```bash
# All services
docker-compose -f docker-compose.dev.yml logs -f

# Specific service
docker-compose -f docker-compose.dev.yml logs -f client-dev
```

## Stopping the Development Environment

```bash
# Stop services but keep volumes
docker-compose -f docker-compose.dev.yml down

# Stop services and remove volumes (will remove database data)
docker-compose -f docker-compose.dev.yml down -v
```

## Rebuilding Services

If you make changes to the Dockerfiles or need to rebuild the services:

```bash
docker-compose -f docker-compose.dev.yml build
# or rebuild and restart
docker-compose -f docker-compose.dev.yml up -d --build
```

## Troubleshooting

### Node Modules Issues

If you encounter issues with node modules, you might need to rebuild them:

```bash
# For the backend
docker-compose -f docker-compose.dev.yml exec backend-dev npm rebuild

# For the frontend
docker-compose -f docker-compose.dev.yml exec client-dev npm rebuild
```

### Database Connection Issues

If the backend can't connect to the database, make sure the database service is running:

```bash
docker-compose -f docker-compose.dev.yml ps
```

You may need to restart the backend service after the database is fully initialized:

```bash
docker-compose -f docker-compose.dev.yml restart backend-dev
```