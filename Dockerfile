# Use an official Node.js runtime as a parent image
FROM node:latest


# Copy package.json and package-lock.json to the container
COPY package*.json ./


# Install dependencies
RUN npm install


# Copy the rest of the application code to the container
COPY . .


# Expose the port on which the application will run
EXPOSE 3000


# Start the application
CMD [ "node", "server.js" ] 