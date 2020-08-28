docker build -f Dockerfile.dev . -t patriciu/labas6
docker run -p 8080:3030 -v /app_node/node_modules -v $(pwd):/app_node patriciu/labas6