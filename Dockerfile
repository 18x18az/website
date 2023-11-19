FROM node:lts-alpine as build

ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json package.json
COPY yarn.lock yarn.lock

USER node

RUN yarn

COPY --chown=node:node . .
RUN yarn build

FROM node:lts-alpine as runner

WORKDIR /home/node/app
COPY --from=build /home/node/app/package.json .
COPY --from=build /home/node/app/yarn.lock .
COPY --from=build /home/node/app/next.config.js ./
COPY --from=build /home/node/app/public ./public
COPY --from=build /home/node/app/.next/standalone ./
COPY --from=build /home/node/app/.next/static ./.next/static

EXPOSE 3000

CMD yarn start