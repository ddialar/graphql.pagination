![GraphQL - Header](img/repo-header.png)

[< Back](https://github.com/ddialar/graphql.pagination#readme.md)

# Description

This repository code is designed in order to test the pagination on GraphQL queries.

In order to do that, it has implemented a GraphQL server application that is able to recor movies, directors, writers, genres and actors.

The information source and presistance is managed via a second server implemented in order to provide these data. That server in based on [json-server](https://github.com/typicode/json-server) and it can be found [here](https://github.com/ddialar/js.json-server.movies).

From here on forward, the pagination system has been implemented on the [movie](src/graphql/models/movie.type.js) object type. In addition, in order to generalize the pagination process, it has been implemented a common "library" named as [pagination](src/graphql/shared/pagination.js).

# Procedure.

```sh
$ git clone https://github.com/ddialar/graphql.pagination
$ cd graphql.pagination
$ npm i
$ npm run dev
```

You must remember that in order to use this code correctly, it's needed to cloen the `json-server` [repository](https://github.com/ddialar/js.json-server.movies) that contains data, following the provided steps.