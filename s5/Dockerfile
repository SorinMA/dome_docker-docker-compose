FROM node:alpine

WORKDIR /appNode

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]