import { NativeRouter } from "react-router-native";
import {
  ApolloProvider,
} from "@apollo/client";

import Main from "./src/Main";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from "./src/context/AuthStorageContext";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthStorageContext.Provider value={authStorage}>
        <NativeRouter>
          <Main />
        </NativeRouter>
      </AuthStorageContext.Provider>
    </ApolloProvider>
  );
}
