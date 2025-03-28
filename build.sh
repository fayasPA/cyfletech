#!/bin/bash

# Set variables
BUILD_DIR="dist"

TARGET_DIR="/home/sites/39b/b/bc5b152c63/cyfletech_build_folder"

echo "Starting Vite React build process..."

# Navigate to the project directory (optional, update if needed)
# cd /path/to/your/project
if npm install; then
    echo "Installation successful."
else
    echo "installation failed. Exiting..."
    exit 1
fi

# Run the Vite build
if npm run build; then
    echo "Build successful."
else
    echo "Build failed. Exiting..."
    exit 1
fi

# Ensure the target directory exists
if [ ! -d "$TARGET_DIR" ]; then
    echo "Creating target directory: $TARGET_DIR"
    mkdir -p "$TARGET_DIR"
fi

# Copy build files, overwriting existing ones
echo "Deploying files to $TARGET_DIR..."
cp -r $BUILD_DIR/* $TARGET_DIR/

echo "Deployment completed successfully."
