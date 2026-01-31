import { useEffect, useContext } from "react";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import AuthStorageContext from "../context/AuthStorageContext";

const SignOut = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  useEffect(() => {
    const signOut = async () => {
      await authStorage.removeAccessToken();
      await apolloClient.resetStore();
      navigate("/signin", { replace: true });
    };

    signOut();
  }, [authStorage, apolloClient, navigate]);

  return null;
};

export default SignOut;
