import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql', // Remplacez par l'URL de votre serveur GraphQL
});

const client = new ApolloClient({
    link: from([httpLink]),
    cache: new InMemoryCache(),
});

export default client;
