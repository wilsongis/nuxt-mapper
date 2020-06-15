#!/bin/sh

docker build -t nuxt-mapper -f Dockerfile .
docker run --privileged -ti -v ${PWD}:/usr/local/bin/nuxt-mapper -w /usr/local/bin/nuxt-mapper -p 5000:5000 nuxt-mapper zsh
