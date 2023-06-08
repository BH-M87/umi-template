#!/bin/bash
if [ ! -n "$1" ]; then
  echo "Please specify the docker group."
  exit 1
fi
if [ ! -n "$2" ]; then
  echo "Please specify docker name."
  exit 1
fi
if [ ! -n "$3" ]; then
  echo "Please specify the version."
  exit 1
fi
group=$1
name=$2
version=$3
echo "Start to pull docker images."
docker pull $group/$name:$version &&
  echo "Start to save docker images." &&
  mkdir -p tar &&
  docker save -o tar/$name_$version.tar $group/$name:$version &&
  docker rmi $group/$name:$version &&
  ./scripts/docker_rmi_none.sh
echo "Done" &&
  open tar
