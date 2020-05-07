FROM node:alpine

ENV MAIN_PATH=/usr/local/bin/nuxt-mapper/

# update and install dependency
RUN apk update && apk upgrade && apk add python make g++ git wget bash zsh && wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true


# Set up Project

# expose 5000 on container
EXPOSE 5000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=5000

CMD cd ${MAIN_PATH} && ["npm install"] && ["zsh"]
