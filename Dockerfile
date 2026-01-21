# -------------------------------
# STEP 1: Build React (Vite) app
# -------------------------------
FROM node:18-alpine AS build

# Set working directory inside container
WORKDIR /app

# Copy only package files first (for caching)
COPY package*.json ./

# Install dependencies (clean install)
RUN npm ci

# Copy rest of the source code
COPY . .

# Build the app for production
RUN npm run build

# -------------------------------
# STEP 2: Run the production build using Nginx
# -------------------------------
FROM nginx:stable-alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built React files from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
