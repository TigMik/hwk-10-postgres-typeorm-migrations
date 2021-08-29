FROM node:14.17.4

RUN npm install -g nodemon

WORKDIR /app

COPY src /app/src

COPY package.json package-lock.json .env /app/

RUN npm install

CMD npm run dev