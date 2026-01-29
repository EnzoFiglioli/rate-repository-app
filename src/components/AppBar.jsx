import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Link } from "react-router-native";

export default function AppBar() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <Link to="/">
          <Text style={styles.text}>Sign In</Text>
        </Link>
        <Link to="/repositories">
          <Text style={styles.text}>Repositories</Text>
        </Link>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: "#24292e",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 15,
  },
});
