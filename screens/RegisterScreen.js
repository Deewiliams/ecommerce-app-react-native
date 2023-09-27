import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    //sending a post request to the backend API
    axios
      .post("http://localhost:8000/register", user)
      .then((res) => {
        console.log("user info", res);
        Alert.alert("Registration successfully");
        setName("");
        setPassword("");
        setEmail("");
      })
      .catch((error) => {
        Alert.alert("an error occured", error);
        console.log("registration fail", error);
      });
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Image
          style={{ width: 150, height: 100 }}
          source={require("./../assets/amazon.png")}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Register to your Account
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View style={styles.emailInput}>
            <Ionicons
              name="person"
              style={{ marginLeft: 10 }}
              size={24}
              color="gray"
            />

            <TextInput
              value={name}
              onChange={(text) => setName(text)}
              style={styles.emailText}
              placeholder="Enter your full name"
            />
          </View>
          <View style={styles.emailInput}>
            <MaterialIcons
              style={{ marginLeft: 10 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              onChange={(text) => setEmail(text)}
              style={styles.emailText}
              placeholder="Enter your email"
            />
          </View>
        </View>

        <View>
          <View style={styles.emailInput}>
            <AntDesign
              style={{ marginLeft: 10 }}
              name="lock1"
              size={24}
              color="gray"
            />
            <TextInput
              value={password}
              onChange={(text) => setPassword(text)}
              secureTextEntry={true}
              style={styles.emailText}
              placeholder="Enter your password"
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 12,
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Fogot password
          </Text>
        </View>

        <View style={{ marginTop: 80 }}>
          <Pressable onPress={handleRegister} style={styles.button}>
            <Text style={styles.loginButton}>Register</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Already have an account? Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  emailInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  emailText: {
    color: "gray",
    marginVertical: 10,
    width: 300,
    fontSize: 18,
  },
  button: {
    width: 200,
    backgroundColor: "#FEBE10",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
  },
  loginButton: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
