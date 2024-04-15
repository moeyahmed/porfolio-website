# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in package.json
RUN npm install

# Make port 5173 available to the world outside this container
EXPOSE 5176

# Define environment variable
ENV NAME World

# Run npm start when the container launches
CMD ["npm", "start"]
