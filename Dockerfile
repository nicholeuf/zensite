FROM node:boron
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
CMD npm run build
CMD node server
EXPOSE 80
