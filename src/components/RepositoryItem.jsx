import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  fullName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  language: {
    alignSelf: "flex-start",
    backgroundColor: "#0366d6",
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 5,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  stat: {
    alignItems: "center",
  },
});

const Stat = ({ label, value }) => (
  <View style={styles.stat}>
    <Text style={{ fontWeight: "bold" }}>{value}</Text>
    <Text>{label}</Text>
  </View>
);

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: repository.ownerAvatarUrl }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.fullName}>{repository.fullName}</Text>
          <Text>{repository.description}</Text>
          <Text style={styles.language}>{repository.language}</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <Stat label="Stars" value={repository.stargazersCount} />
        <Stat label="Forks" value={repository.forksCount} />
        <Stat label="Reviews" value={repository.reviewCount} />
        <Stat label="Rating" value={repository.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
