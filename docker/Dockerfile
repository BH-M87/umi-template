# Citybrain nginx Dockerfile
# Version 1.0

# Base images
FROM nginx:latest

### CONSTANTS ###
# Keep config_prefix as same as window.prefix in index.html, careful modification
ENV constants_prefix /api-prefix/
### SYSTEM ###
# Use in envsubset, to integrate with nginx variable, do not change
ENV DOLLAR $
# Server name, not needed to change in most scenarios
ENV server_name nginx-server
### BE ###
# The host of the backend server
ENV be_proxy_pass http://
### FE ###
ENV access_control_allow_origin *
ENV be_basepath /
### Command ###
RUN mkdir -p /var/www
COPY ./dist /var/www
COPY ./dist/index.html /var/www/index.template.html
COPY ./docker/conf/nginx.template.conf /etc/nginx

### EXPOSE Port ###
EXPOSE 80

### start CMD ###
CMD /bin/bash -c "export docker_start_date='$(date)' && envsubst < /var/www/index.template.html > /var/www/index.html && envsubst < /etc/nginx/nginx.template.conf > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"
