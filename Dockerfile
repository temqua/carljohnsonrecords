FROM nginx:latest
WORKDIR /site
COPY index.html index.html
COPY global.css global.css
COPY nginx.conf nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 5090
CMD ["nginx", "-g", "daemon off;"]