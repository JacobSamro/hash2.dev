FROM node:8.12.0 as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/
COPY ./yarn.lock /usr/src/app/
COPY ./nginx.conf /usr/src/app/
COPY ./patch.js /usr/src/app/

RUN npm i yarn -g

RUN yarn install

COPY ./ /usr/src/app

RUN npm run build --prod

FROM nginx:alpine

COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/app/dist/browser .