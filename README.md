![GraphQL - Header](img/repo-header.png)

[English version](README.EN.md)

# Descripción

El código contenido en este repositorio está diseñado para probar la paginación en consultas GraphQL.

Para ello, se ha implementado una aplicación GraphQL de servidor, capaz de registrar películas, directores, guionistas, géneros cinematográficos así como actores y actrices.

El origen y la persistencia de la información se llevará a cabo mediante el uso de un segundo servidor, cuya única función será la de proveer datos. Dicho servidor estará basado en [json-server](https://github.com/typicode/json-server) y puede encontrarse en este [repositorio](https://github.com/ddialar/js.json-server.movies).

A partir de este punto, el sistema de paginación se ha implementado sobre el objeto tipo [movie](src/graphql/models/movie.type.js) y para generalizar el uso de la paginación, se ha implementado una "librería" común denominada [pagination](src/graphql/shared/pagination.js).

# Procedimiento a seguir

```sh
$ git clone https://github.com/ddialar/graphql.pagination
$ cd graphql.pagination
$ npm i
$ npm run dev
```

Recuerda que para poder usar correctamente este código, es necesario que hayas clonado el [repositorio](https://github.com/ddialar/js.json-server.movies) del servidor `json-server` que contiene los datos, siguiendo las indicaciones proporcionadas en su README para la configuración y arranque del mismo.