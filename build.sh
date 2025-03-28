#!/bin/bash

# Set variables
BUILD_DIR="dist"
TARGET_DIR="/Users/smart/Downloads/sample"

echo "Starting Vite React build process..."

# Navigate to the project directory (optional, update if needed)
# cd /path/to/your/project

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
