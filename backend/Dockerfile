FROM node:23.0-alpine

WORKDIR /usr/app

COPY src ./src
COPY ./package*.json ./

EXPOSE 3333

CMD npm install && npm start
