# Use an official Node.js runtime as the base image
FROM node:18.12.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Copy the .env file to the working directory
COPY .env .

# Expose the port the app runs on
EXPOSE 5003

# Command to run the application
CMD ["npm", "start"]
