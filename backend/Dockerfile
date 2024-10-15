# Use the Node.js 20 Alpine image as the base image
FROM node:20-alpine

# Create app directory and set permissions
WORKDIR /app/backend
# RUN chown -R node:node /app/backend
COPY package.json .
# Switch to non-root user
# USER node

# Copy package.json from the root directory (for backend dependencies)
# COPY --chown=node:node ./package*.json ./

# Install backend dependencies
RUN npm install

# Copy the backend source code (ensure it only copies backend files)
# COPY --chown=node:node ./backend ./
COPY . .

# Expose the backend port
EXPOSE 5000

# Add healthcheck (ensure healthcheck.js is in the backend directory)
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD node healthcheck.js

# Start the backend app
CMD ["npm", "start"]
