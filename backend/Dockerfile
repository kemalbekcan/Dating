FROM --platform=linux/amd64 node
WORKDIR /usr/src/app
RUN npm install -g nodemon
RUN apt-get update && apt-get install -y gcc
COPY package.json package-lock.json .
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]