FROM alpine:3.21
RUN apk add --no-cache nodejs npm
RUN npm install --save-dev @commitlint/cli
COPY entrypoint.sh /entrypoint.sh
COPY commitlint.config.js /commitlint.config.js
ENTRYPOINT ["/entrypoint.sh"]
