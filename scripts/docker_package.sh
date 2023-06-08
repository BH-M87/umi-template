#!/bin/bash
if [ ! -n "$1" ]; then
  echo "Please specify the platform type."
  exit 1
fi
if [ ! -n "$2" ]; then
  echo "Please specify the docker group."
  exit 1
fi
if [ ! -n "$3" ]; then
  echo "Please specify docker name."
  exit 1
fi
if [ ! -n "$4" ]; then
  echo "Please specify the version."
  exit 1
fi
platformType=amd64
if [ -n "$1" ]; then
  platformType=$1
fi
group=$2
name=$3
version=$4
platform=linux/$platformType
echo "Start to build docker images." &&
  docker build --platform=$platform -t $group/$name:$version -f ./docker/Dockerfile . &&
  echo "Start to save docker images." &&
  mkdir -p tar &&
  docker save -o tar/$name_local_${platformType}_$version.tar $group/$name:$version &&
  docker rmi $group/$name:$version &&
  ./scripts/docker_rmi_none.sh
echo "Done" &&
  open tar
