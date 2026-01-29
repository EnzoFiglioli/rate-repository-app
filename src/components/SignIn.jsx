import { Formik } from "formik";
import * as yup from "yup";
import { View, Text, Alert, Pressable, StyleSheet } from "react-native";
import FormikTextInput from "./shared/FormikTextInput";
import Constant from "expo-constants";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

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

const SignIn = () => {
  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          Alert.alert("Sign In", `Username: ${values.username}`);
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
    </>
  );
};

export default SignIn;
