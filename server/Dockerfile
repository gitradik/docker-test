FROM node:10.13.0

ARG NODE_ENV="development"

RUN mkdir /server

RUN mkdir -p /var/www/html/images

WORKDIR /server

COPY package*.json ./

RUN npm install -g nodemon

RUN npm install

COPY . .

EXPOSE 5000

CMD npm start