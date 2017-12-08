FROM node:boron

WORKDIR /app

COPY package.json /app
RUN yarn install
COPY . /app
RUN npm run build

CMD ["node", "server"]

EXPOSE 80
