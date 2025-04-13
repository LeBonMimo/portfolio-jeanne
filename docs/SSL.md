# SSL Setup for Docker Deployment

## SSL Certificate Structure

For the Docker setup to work with your existing SSL certificates, make sure your certificate directory structure matches what's expected in the Nginx configuration. The Docker Compose configuration maps `/etc/letsencrypt` from the host to `/etc/nginx/ssl` in the container.

## Required Files and Directory Structure

```
/etc/letsencrypt/
├── live/
│   ├── olalao-jeanne.fr/
│   │   ├── fullchain.pem
│   │   └── privkey.pem
│   └── api.olalao-jeanne.fr/
│       ├── fullchain.pem
│       └── privkey.pem
├── options-ssl-nginx.conf
└── ssl-dhparams.pem
```

## Certbot Configuration

If you're setting up SSL for the first time or need to renew certificates, use Certbot:

```bash
# Install Certbot (if not already installed)
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Obtain certificates
sudo certbot --nginx -d olalao-jeanne.fr -d www.olalao-jeanne.fr
sudo certbot --nginx -d api.olalao-jeanne.fr

# Verify automatic renewal
sudo certbot renew --dry-run
```

## Renewal with Docker

For SSL certificate renewal when using Docker, you'll need to either:

1. Temporarily stop the Nginx container:
   ```bash
   docker-compose stop nginx
   sudo certbot renew
   docker-compose start nginx
   ```

2. Or use the standalone plugin with port mapping:
   ```bash
   docker-compose stop nginx
   sudo certbot renew --standalone
   docker-compose start nginx
   ```

## Auto-renewal with Cron

Set up a cron job to automatically handle renewal:

```bash
# Edit crontab
sudo crontab -e

# Add this line (runs daily at 3:30am)
30 3 * * * /usr/bin/docker-compose -f /path/to/your/docker-compose.yml stop nginx && /usr/bin/certbot renew --quiet && /usr/bin/docker-compose -f /path/to/your/docker-compose.yml start nginx
```

## Troubleshooting

If you encounter issues with SSL configuration:

1. Check that the certificates are correctly mapped in the container:
   ```bash
   docker-compose exec nginx ls -la /etc/nginx/ssl/live/olalao-jeanne.fr/
   ```

2. Verify Nginx can read the certificate files:
   ```bash
   docker-compose exec nginx nginx -t
   ```

3. Check Nginx logs:
   ```bash
   docker-compose logs nginx
   ```