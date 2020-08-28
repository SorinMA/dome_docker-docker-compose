FROM node:alpine as baseImg

WORKDIR /client

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "build"]

FROM nginx

COPY --from=baseImg /client/build /usr/share/nginx/html