import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = () => {
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
            Login in to your Account
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View style={styles.emailInput}>
            <MaterialIcons
              style={{ marginLeft: 10 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              style={styles.emailText}
              placeholder="Enter your email"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.emailInput}>
            <AntDesign
              style={{ marginLeft: 10 }}
              name="lock1"
              size={24}
              color="gray"
            />
            <TextInput
              style={styles.emailText}
              placeholder="Enter your password"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
  },
});
