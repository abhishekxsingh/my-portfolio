# Use an official node runtime as a parent image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose port 5000
EXPOSE 5000

# Run serve to serve the built app
CMD ["serve", "-s", "dist", "-l", "5000"]
