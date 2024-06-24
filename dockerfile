FROM node:22-bookworm

WORKDIR /app

COPY . .

RUN npm install
RUN npm run start
