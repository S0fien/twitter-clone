FROM node:16-alpine3.14

RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN yarn install

COPY src src
# COPY public public
# COPY codegen.ts .

COPY tsconfig.json .

CMD yarn run start
