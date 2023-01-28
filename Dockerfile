FROM nginx:latest
WORKDIR /site
COPY public/* .
COPY nginx.conf nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 5090
CMD ["nginx", "-g", "daemon off;"]