FROM node:boron

WORKDIR /app

COPY package.json /app
RUN yarn install
COPY . /app

CMD npm run build; node server

EXPOSE 80
