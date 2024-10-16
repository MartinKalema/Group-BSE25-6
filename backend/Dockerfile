FROM node:20-alpine

RUN mkdir /usr/backend

WORKDIR /usr/backend

COPY package*.json .

RUN npm install

COPY . . --exclude=node_modules/

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD node healthcheck.js

CMD ["npm", "start"]
