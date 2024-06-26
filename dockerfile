FROM node:22-bookworm

WORKDIR /app

COPY . .

RUN npm install

CMD [ "npm", "run", "start" ]
