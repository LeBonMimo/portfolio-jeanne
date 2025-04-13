# GitHub Secrets for CI/CD Pipeline

This document provides detailed instructions for setting up the required GitHub secrets for the continuous deployment workflow.

## Required Secrets

| Secret Name | Description |
|-------------|-------------|
| `SERVER_HOST` | The IP address or hostname of your server |
| `SERVER_USERNAME` | The username to use for SSH connection |
| `SERVER_SSH_KEY` | The private SSH key for authentication |
| `SERVER_PORT` | The SSH port (usually 22) |

## Step-by-Step Guide

### 1. Generate an SSH Key Pair for Deployment

First, generate a dedicated SSH key pair for the GitHub Actions deployment:

```bash
# Generate a new SSH key with a strong algorithm (ed25519)
ssh-keygen -t ed25519 -C "github-deployment" -f ~/.ssh/github_deploy_key

# No passphrase should be used for automated deployment
```

### 2. Configure Your Server

Add the public key to the authorized_keys file on your server:

```bash
# On your local machine, display the public key
cat ~/.ssh/github_deploy_key.pub

# Copy the output

# On your server, add it to authorized_keys
echo "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI... github-deployment" >> ~/.ssh/authorized_keys

# Make sure permissions are correct
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

### 3. Add Secrets to GitHub

1. Navigate to your GitHub repository
2. Click on "Settings"
3. In the left sidebar, click on "Secrets and variables" -> "Actions"
4. Click on "New repository secret"
5. Add each secret:

   a. **SERVER_HOST**
    - Name: `SERVER_HOST`
    - Value: Your server's IP address or hostname (e.g., `123.456.789.012` or `example.com`)

   b. **SERVER_USERNAME**
    - Name: `SERVER_USERNAME`
    - Value: Your SSH username (e.g., `ubuntu`, `debian`, etc.)

   c. **SERVER_SSH_KEY**
    - Name: `SERVER_SSH_KEY`
    - Value: The entire content of your private key file (~/.ssh/github_deploy_key)
      ```bash
      # Display the private key content
      cat ~/.ssh/github_deploy_key
      
      # Copy everything including the BEGIN and END lines
      ```

   d. **SERVER_PORT**
    - Name: `SERVER_PORT`
    - Value: The SSH port number (usually `22`)

### 4. Test the Connection

Before relying on the CI/CD pipeline, test the SSH connection manually:

```bash
ssh -i ~/.ssh/github_deploy_key -p <port> <username>@<host>
```

If this connects successfully, your GitHub Actions workflow should work as well.

## Security Considerations

1. **Use a dedicated deployment key**: Don't use your personal SSH key for automation
2. **Restrict the key's permissions**: On your server, consider using `authorized_keys` options to restrict what the deployment key can do
3. **Consider IP restrictions**: If your GitHub Actions runners use consistent IP addresses, you can further restrict SSH access by IP
4. **Regularly rotate keys**: Update your deployment keys periodically for better security

## Troubleshooting

If the workflow fails with SSH connection issues:

1. Check that the server is accessible from the internet
2. Verify that the SSH port is open in your firewall
3. Confirm that the username and host are correct
4. Ensure the SSH key is properly formatted in the GitHub secret (include the entire key including BEGIN and END lines)
5. Check that the key is properly added to authorized_keys on the server
6. Review the SSH server logs for any connection attempts and errors

For additional security, consider configuring SSH to only allow this key to execute specific commands necessary for deployment.