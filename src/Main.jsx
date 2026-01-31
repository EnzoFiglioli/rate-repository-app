import { Routes, Route } from "react-router-native";
import RepositoryList from "./pages/RepositoryList";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import AppBar from "./components/AppBar";
import { View, StatusBar } from "react-native";
import { platformStyles } from "./utils/Platform";

function Main() {
  return (
    <View style={platformStyles}>
      <StatusBar barStyle="light-content" />
      <AppBar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repository/:id" element={<SingleRepository />} />
      </Routes>
    </View>
  );
}

export default Main;
