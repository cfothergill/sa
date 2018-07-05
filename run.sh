#!/bin/sh

docker run -v $(pwd):/app -w /app node:8 node index.js
