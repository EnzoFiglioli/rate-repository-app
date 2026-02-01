import { Routes, Route, Navigate } from "react-router-native";
import RepositoryList from "./pages/RepositoryList";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import AppBar from "./components/AppBar";
import { View, StatusBar } from "react-native";
import { platformStyles } from "./utils/Platform";
import SingleRepository from "./pages/SingleRepository";

function Main() {
  return (
    <View style={platformStyles}>
      <StatusBar barStyle="light-content" />
      <AppBar />

      <Routes>
        <Route path="/" element={<Navigate to="/repositories" replace />} />
        <Route path="/repositories" element={<RepositoryList />} />
        <Route path="/repository/:id" element={<SingleRepository />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </View>
  );
}

export default Main;
