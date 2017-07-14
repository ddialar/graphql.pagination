import express from 'express';
import expressGraphQL from 'express-graphql';

import schema from './graphql/schema';

const app = express();

app.use(
    '/graphql',
    expressGraphQL({
        schema: schema,
        graphiql: true
    })
);

app.listen(
    4500,
    () => {
        console.log('Server listening on port 4500 ...');
    }
);