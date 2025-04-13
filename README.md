# Olalao-Jeanne Project

A Strapi backend and Nuxt frontend application with Docker Compose setup for both development and production environments.

## Project Structure

```
.
├── backend           # Strapi backend
├── client            # Nuxt frontend
├── nginx             # Nginx configuration
├── docker-compose.yml          # Production Docker Compose
├── docker-compose.dev.yml      # Development Docker Compose
├── Makefile          # Commands for managing the project
└── .github/workflows # CI/CD configuration
```

## Development

Start the development environment with HTTPS:

```bash
make dev
```

Access your development site at https://localhost

## Production

Deploy to production:

```bash
make prod
```

## CI/CD Setup

This project uses GitHub Actions for continuous deployment. When changes are pushed to the `main` branch, the workflow will:

1. Connect to your server via SSH
2. Pull the latest changes
3. Rebuild and restart the Docker containers

### Required GitHub Secrets

To set up the CI/CD pipeline, you need to add the following secrets to your GitHub repository:

| Secret Name | Description |
|-------------|-------------|
| `SERVER_HOST` | The IP address or hostname of your server |
| `SERVER_USERNAME` | The username to use for SSH connection |
| `SERVER_SSH_KEY` | The private SSH key for authentication |
| `SERVER_PORT` | The SSH port (usually 22) |

### How to Add GitHub Secrets

1. Navigate to your GitHub repository
2. Click on "Settings"
3. In the left sidebar, click on "Secrets and variables" -> "Actions"
4. Click on "New repository secret"
5. Add each of the required secrets

### Generating SSH Keys for Deployment

If you don't have an SSH key pair for deployment:

```bash
# Generate a new SSH key
ssh-keygen -t ed25519 -C "github-deployment" -f ~/.ssh/github_deploy_key

# Display the public key (add this to your server's authorized_keys)
cat ~/.ssh/github_deploy_key.pub

# Display the private key (add this as the SERVER_SSH_KEY secret in GitHub)
cat ~/.ssh/github_deploy_key
```

### Server Setup

On your server, you need to:

1. Create a directory for the project:
   ```bash
   mkdir -p /home/yourusername/olalao-jeanne
   ```

2. Initialize a Git repository and add the GitHub repo as a remote:
   ```bash
   cd /home/yourusername/olalao-jeanne
   git init
   git remote add origin https://github.com/yourusername/your-repo.git
   ```

3. Add the deployment public key to authorized_keys:
   ```bash
   echo "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI... github-deployment" >> ~/.ssh/authorized_keys
   ```

4. Make sure Docker and Docker Compose are installed and the user has permissions to use them

## SSL Certificates

For production environment, you need to set up SSL certificates:

```bash
make ssl-create
```

This will use Certbot to create certificates for your domains.

## Database Backups

Create a database backup:

```bash
make db-backup
```

Restore from a backup:

```bash
make db-restore FILE=backups/backup_filename.sql
```

## Troubleshooting

For more detailed usage instructions, see the [Makefile documentation](./makefile-docs.md).

## License

[Your license information here]