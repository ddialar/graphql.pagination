import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLFloat,
    GraphQLString,
    GraphQLList,
} from 'graphql';

import * as MoviesDirectorsService from '../services/movies-directors.service';
import * as MoviesWritersService from '../services/movies-writers.service';
import * as MoviesActorsService from '../services/movies-actors.service';
import * as MoviesGenresService from '../services/movies-genres.service';

import * as utils  from '../shared/utils';

var MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        poster_image: { type: GraphQLString },
        duration: { type: GraphQLInt },
        rating: { type: GraphQLFloat },
        classification: { type: GraphQLString },
        year: { type: GraphQLString },
        directors: {
            type: new GraphQLList(DirectorType),
            resolve: (parentValues, args) => {
                return MoviesDirectorsService.getDirectorsDataByMovieId(parentValues.id);
            }
        },
        writers: {
            type: new GraphQLList(WriterType),
            resolve: (parentValues, args) => {
                return MoviesWritersService.getWritersDataByMovieId(parentValues.id);
            }
        },
        actors: {
            type: new GraphQLList(ActorType),
            resolve: (parentValues, args) => {
                return MoviesActorsService.getActorsDataByMovieId(parentValues.id);
            }
        },
        genres: {
            type: new GraphQLList(GenreType),
            resolve: (parentValues, args) => {
                return MoviesGenresService.getGenresDataByMovieId(parentValues.id);
            }
        },
        genresAsArray: {
            type: new GraphQLList(GraphQLString),
            resolve: (parentValues, args) => {
                return MoviesGenresService
                    .getGenresDataByMovieId(parentValues.id)
                    .then((genres) => {
                        return genres.map(genre => genre.name);
                    });
            }
        }
    })
});

export default MovieType;

import DirectorType from './director.type';
import WriterType from './writer.type';
import ActorType from './actor.type';
import GenreType from './genre.type';