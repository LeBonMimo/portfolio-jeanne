FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the Nuxt application
RUN npm run build

# Production stage
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy built assets from builder stage
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./

# Set the user to node
USER node

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]