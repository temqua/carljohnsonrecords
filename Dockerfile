FROM node:18-slim AS build
WORKDIR /site
COPY . .
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN npm ci
EXPOSE 5090
CMD ["npm", "start"]

