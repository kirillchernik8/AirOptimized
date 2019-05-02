FROM node:8

RUN wget http://download.redis.io/redis-stable.tar.gz && \
    tar xvzf redis-stable.tar.gz && \
    cd redis-stable && \
    make && \
    mv src/redis-server /usr/bin/ && \
    cd .. && \
    rm -r redis-stable && \
    npm install -g concurrently   

EXPOSE 6379 
WORKDIR /usr/sr

COPY package*.json ./
COPY . .

EXPOSE 3001
EXPOSE 6379

RUN npm install webpack -g
RUN npm install webpack-cli -g
RUN npm i nodemon -g
RUN npm install 

CMD concurrently "/usr/bin/redis-server --bind '0.0.0.0' --maxmemory 10mb --maxmemory-policy allkeys-lru " "sleep 5s; npm run build; npm start"
