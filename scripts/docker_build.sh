#!/bin/bash
./scripts/npm_build.sh &&
  ./scripts/docker_package.sh $1 $2 $3 $4
