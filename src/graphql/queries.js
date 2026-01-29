import { gql } from '@apollo/client';

const GET_ALL_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export {
  GET_ALL_REPOSITORIES
}