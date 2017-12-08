FROM node:boron

WORKDIR /app

COPY package.json /app
RUN yarn install
COPY . /app

EXPOSE 80

CMD ["npm", "run", "build"]
CMD ["node", "server"]
