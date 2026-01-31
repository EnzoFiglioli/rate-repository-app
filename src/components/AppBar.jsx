import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Link } from "react-router-native";
import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

export default function AppBar() {
  const { data, loading } = useQuery(ME);

  if (loading) {
    return null;
  }
  const user = data?.me || null;
  console.log("AppBar user:", user);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>

        {user !== null ? (
          <Link to="/signout">
            <Text style={styles.text}>Sign Out</Text>
          </Link>
        ) : (
          <Link to="/signin">
            <Text style={styles.text}>Sign In</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#24292e",
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  text: {
    color: "white",
    marginRight: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
});