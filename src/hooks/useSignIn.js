import { useMutation, useApolloClient } from "@apollo/client";
import { useContext } from "react";
import AuthStorageContext from "../context/AuthStorageContext";

const useSignIn = (login) => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(login);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });

    await authStorage.setAccessToken(
      data.authenticate.accessToken
    );

    await apolloClient.resetStore();

    return { data };
  };

  return [signIn, result];
};

export default useSignIn;
