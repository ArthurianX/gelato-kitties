import {
    GraphQLSchema,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
} from 'graphql';
import { fetchKitty, fetchKitties, fetchRecommendedKitties } from './fetchers';

const KittyType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Kitty',
    description: 'The kitty entity',
    fields: () => ({
        id: { type: GraphQLString, resolve: (kitty) => kitty.id },
        name: {
            type: GraphQLString,
            resolve: (kitty) => kitty.name || '',
        },
        image_url: {
            type: GraphQLString,
            resolve: (kitty) => kitty.image_url,
        },
        is_exclusive: {
            type: GraphQLBoolean,
            resolve: (kitty) => kitty.is_exclusive,
        },
        is_prestige: {
            type: GraphQLBoolean,
            resolve: (kitty) => kitty.is_prestige,
        },
        is_fancy: {
            type: GraphQLBoolean,
            resolve: (kitty) => kitty.is_fancy,
        },
        is_special_edition: {
            type: GraphQLBoolean,
            resolve: (kitty) => kitty.is_special_edition,
        },
        color: {
            type: GraphQLString,
            resolve: (kitty) => kitty.color,
        },
        sire: {
            // @ts-ignore
            type: new GraphQLObjectType(KittyType),
            resolve: (kitty) => fetchKitty(kitty.sire.id),
        },
        matron: {
            // @ts-ignore
            type: new GraphQLObjectType(KittyType),
            resolve: (kitty) => fetchKitty(kitty.matron.id),
        },
    }),
});

const QueryType = new GraphQLObjectType({
    name: 'MainQuery',
    description: 'The root query',
    fields: () => ({
        allKitties: {
            type: new GraphQLList(KittyType),
            args: {
                offset: { type: GraphQLString },
                limit: { type: GraphQLString },
            },
            resolve: (root, args) => fetchKitties(args.offset, args.limit),
        },
        recommendedKitties: {
            type: new GraphQLList(KittyType),
            args: {
                offset: { type: GraphQLString },
                limit: { type: GraphQLString },
            },
            resolve: (root, args) =>
                fetchRecommendedKitties(args.offset, args.limit),
        },
        kitty: {
            type: KittyType,
            args: {
                id: { type: GraphQLString },
            },
            resolve: (root, args) => fetchKitty(args.id),
        },
    }),
});

export default new GraphQLSchema({
    query: QueryType,
});
