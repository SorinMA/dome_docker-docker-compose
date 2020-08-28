FROM node:alpine as buildPhase 
WORKDIR /app_react
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=buildPhase /app_react/build /usr/share/nginx/html