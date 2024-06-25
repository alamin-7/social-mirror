FROM node:lts-slim AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ./ ./
RUN npm run build

FROM node:lts-slim

WORKDIR /app

COPY server/package*.json ./server/
RUN cd server && npm install

COPY server/ ./server/

COPY --from=build /app/build ./server/public

EXPOSE 5000

CMD ["node", "server/index.js"]