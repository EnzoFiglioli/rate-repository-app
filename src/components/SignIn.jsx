import { Formik } from "formik";
import * as yup from "yup";
import { View, Text, Alert, Pressable, StyleSheet } from "react-native";
import FormikTextInput from "./shared/FormikTextInput";
import { LOGIN } from "../graphql/mutations";
import AuthStorage from "../utils/authStorage";
import useSignIn from "../hooks/useSignIn";
import { redirect } from "react-router-native";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});



const SignIn = () => {
  const [signIn] = useSignIn(LOGIN);

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          const { data } = await signIn(values);
          
          const authStorage = new AuthStorage();
          await authStorage.setAccessToken(
            data.authenticate.accessToken
          );

          const storedToken = await authStorage.getAccessToken();
          console.log("Token stored successfully:", storedToken);

          Alert.alert(
            "Sign In",
            `User ${data.authenticate.user.username} signed in successfully!`
          );
          redirect("/");
        } catch (err) {
          Alert.alert("Sign In Error", err.message);
        }
      }}
    >

        {({ handleSubmit, isSubmitting }) => (
          <View style={styles.container}>
            <FormikTextInput
              name="username"
              placeholder="Username"
              autoCapitalize="none"
              style={styles.input}
            />

            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
              style={styles.input}
            />

            <Pressable
              onPress={handleSubmit}
              disabled={isSubmitting}
              style={({ pressed }) => [
                styles.button,
                pressed && { opacity: 0.8 },
              ]}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
          </View>
        )}
      </Formik>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    backgroundColor: "#ffffff",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "#000000",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});