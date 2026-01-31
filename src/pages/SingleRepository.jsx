import { View, StyleSheet, Pressable, Text } from "react-native";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import * as Linking from "expo-linking";
import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "../components/RepositoryItem";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0366d6",
    padding: 15,
    margin: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

const SingleRepository = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });

  if (loading) return null;
  if (error) return <Text>Error loading repository</Text>;

  const repository = data.repository;

  const openGitHub = () => {
    Linking.openURL(repository.url);
  };

  return (
    <View>
      <RepositoryItem repository={repository} />

      <Pressable style={styles.button} onPress={openGitHub}>
        <Text style={styles.buttonText}>Open in GitHub</Text>
      </Pressable>
    </View>
  );
};

export default SingleRepository;
