docker images
none_image=$(docker images | grep "<none>" | awk '{print $3}')
echo ${none_image}
docker rmi ${none_image}