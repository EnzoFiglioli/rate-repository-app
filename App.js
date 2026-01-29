import 'web-streams-polyfill/polyfill';
import { NativeRouter } from "react-router-native";
import Main from "./src/Main";
import { ApolloClient, HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import Constant from "expo-constants";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: Constant.expoConfig.extra.apolloUri,
  }),
});

export default function App() {
  console.log(Constant.expoConfig)
  return (
    <ApolloProvider client={client}>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  );
}