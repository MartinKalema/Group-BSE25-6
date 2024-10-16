FROM node:20-alpine as build

RUN mkdir /usr/frontend

WORKDIR /usr/frontend   

COPY . .

RUN npm install

ENV PATH /usr/frontend/node_modules/.bin:$PATH

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /usr/frontend/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

