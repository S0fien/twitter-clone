import { gql } from '@apollo/client';

export const GET_TWEETS_QUERY = gql`
  query GetProducts {
    products {
      id
      content
      author
    }
  }
`;
