# flambo

## Requirements

- Docker
- docker-compose
- Node 6

## Installation

Launch rethinkdb, elasticsearch and the api

```sh
docker-compose up --build
```

You should now be able to acces the api at http://localhost:3000/

## Accessing services

- **rethinkdb ui** http://localhost:8080/
- **elasticsearch** http://localhost:9200/, I strongly encourage you to install the [sense chrome extension](https://chrome.google.com/webstore/detail/sense-beta/lhjgkmllcaadmopgmanpapmpjgmfcfig)

## Postman

This repository provides a postman collection to play with the API.
To run it simply import `flamb.postman_collection.json` into postman.
