import {
    GraphQLInt,
    GraphQLList,
} from 'graphql';

import GenreType from '../models/genre.type';
import * as GenresService from '../services/genres.service';

import * as utils from '../shared/utils';

var allQuery = {
    type: new GraphQLList(GenreType),
    description: 'List of all stored genres.',
    resolve: (parentValues, args) => {
        return GenresService.getGenresData();
    }
};

var byIdQuery = {
    type: new GraphQLList(GenreType),
    description: 'List of all stored genres.',
    args: {
        id: { type: new GraphQLList(GraphQLInt) }
    },
    resolve: (parentValues, args) => {
        let queryParams = utils.createQueryParamsString(args.id, 'id');
        return GenresService.getGenresData(queryParams);
    }
};

export {
    allQuery,
    byIdQuery
};