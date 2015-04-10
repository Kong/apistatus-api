# API Status API ![API Status](http://img.apistatus.org/online/aHR0cDovL2FwaS5hcGlzdGF0dXMub3JnL21hcmNv.svg)

An API wrapper around [apistatus](https://github.com/Mashape/apistatus). Makes a GET requests to the target API endpoint and returns response information as JSON. Powering [apistatus.org](http://apistatus.org)!

### Usage

#### Start the server

```
git clone https://github.com/Mashape/apistatus-api
cd apistatus-api
npm install
node server.js
```

#### Make a request

```
curl 127.0.0.1:8080/?url=https://mockbin.com/status/200
```

### MIT license

Copyright (c) 2015, Mashape (https://www.mashape.com/)
