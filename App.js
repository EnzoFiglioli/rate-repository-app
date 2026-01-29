import { NativeRouter } from "react-router-native";
import Main from "./src/Main";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import Constant from "expo-constants";

export default function App() {
  return (
    <ApolloProvider client={new ApolloClient({
      link: new HttpLink({
        uri: Constant.expoConfig.extra.apolloUri,
      }),
      cache: new InMemoryCache(),
    })}>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  );
}