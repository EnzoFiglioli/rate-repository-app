import React from "react";
import { useQuery } from "@apollo/client";
import {
  FlatList,
  View,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useNavigate } from "react-router-native";
import { GET_ALL_REPOSITORIES } from "../graphql/queries";
import RepositoryItem from "../components/RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const navigate = useNavigate();

  const { data, loading, error } = useQuery(GET_ALL_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <ActivityIndicator />;
  if (error) return null;

  const repositories =
    data?.repositories?.edges?.map(edge => edge.node) ?? [];

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
    />
  );
};

export default RepositoryList;
