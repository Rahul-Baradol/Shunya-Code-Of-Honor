FROM node:20-alpine

WORKDIR /usr/app

COPY package* .

RUN npm install

COPY . .

CMD ["yarn", "dev"]