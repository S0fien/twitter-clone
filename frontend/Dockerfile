FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN yarn install 

COPY src src
COPY public public
# COPY codegen.ts .

COPY next.config.mjs .
COPY tsconfig.json .

CMD yarn run dev