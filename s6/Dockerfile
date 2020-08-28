FROM node:alpine

WORKDIR /app_node

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]