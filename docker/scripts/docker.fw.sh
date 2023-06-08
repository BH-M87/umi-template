#!/bin/bash
node -v &&
    npm -v &&
    # npm install -g yarn &&
    yarn &&
    if [ "$1" = "common" ]; then
        npm run build
    else
        npm run build:"$1"
    fi &&
    rm -rf node_modules
