FROM node:20-alpine

WORKDIR /usr/backend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD node healthcheck.js

CMD ["npm", "start"]