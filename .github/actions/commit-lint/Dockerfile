FROM alpine:3.21
RUN apk add --no-cache nodejs npm
COPY entrypoint.sh /entrypoint.sh
COPY commitlint.config.js /commitlint.config.js
ENTRYPOINT ["/entrypoint.sh"]
