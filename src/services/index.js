import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.0.9:5000/api/repositories",
  cache: new InMemoryCache(),
});

async function getAllRepositories() {
  const GET_REPOSITORIES = gql`
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

  const result = await client.query({ query: GET_REPOSITORIES });
  return result.data.repositories.edges.map((edge) => edge.node);
}

export default {
  getAllRepositories,
};
