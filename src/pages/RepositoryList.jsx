import { useQuery } from "@apollo/client";
import { GET_ALL_REPOSITORIES } from "../graphql/queries";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Image
} from "react-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8",
    
  },
  item: {
    backgroundColor: "white",
    padding: 10,
    fontFamily: "System",
    fontSize: 16,
    color: "black",
    
  },
  loadingContainer: {
    
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    padding: 20,
    textAlign: "center",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style={{ fontWeight: "bold" }}>{item.fullName}</Text>
    <Text>{item.description}</Text>
    <Text>Language: {item.language}</Text>
    <Text>⭐ Stars: {item.stargazersCount}</Text>
    <Text>🍴 Forks: {item.forksCount}</Text>
    <Text>📝 Reviews: {item.reviewCount}</Text>
    <Text>⭐ Rating: {item.ratingAverage}</Text>
    <Image
      source={{ uri: item.ownerAvatarUrl }}
      style={{ width: 50, height: 50, borderRadius: 25, marginTop: 10 }}
    />
  </View>
);

export default function RepositoryList(){
  const { data, loading, error } = useQuery(GET_ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const repositoryNodes =
    data?.repositories?.edges?.map((edge) => edge.node) ?? [];

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id}

    />
  );
};


