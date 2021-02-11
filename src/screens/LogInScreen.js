import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";

export default function LogInScreen({ route, navigation }) {
  let LogInScreen = route.params;
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/office.jpg")} style={styles.photo} />

      <View style={styles.text}>
        <Text style={styles.textName}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#aaaaaa"
          placeholder="florentpop@gmail.com"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.line}></View>

      <View style={styles.text}>
        <Text style={styles.textName}>Password</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#aaaaaa"
          placeholder="Password "
          secureTextEntry={true}
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ScanScreen");
          }}
          style={styles.signInButton}
        >
          <Text style={styles.signInText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.resetPassword}>
          <Text style={{ fontSize: 15 }}>Forgot? </Text>
          <View>
            <TouchableOpacity>
              <Text style={{ fontSize: 15, marginBottom: 5 }}>
                Reset Password
              </Text>
            </TouchableOpacity>

            <View
              style={{
                backgroundColor: "#d21f3c",
                height: 2,
                width: 107,
                borderRadius: 15,
              }}
            ></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  photo: {
    height: 400,
    width: "100%",
    flex: 0.7,
    marginBottom: 50,
  },
  signInButton: {
    height: 40,
    width: 320,
    backgroundColor: "#d21f3c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginLeft: 20,
    marginBottom: 40,
  },
  signInText: {
    color: "white",
    fontSize: 15,
  },
  resetPassword: {
    flexDirection: "row",
    marginLeft: 20,
  },

  text: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textName: {
    fontSize: 15,
    marginLeft: 15,
    marginBottom: 35,
  },
  line: {
    backgroundColor: "#e6e7e8",
    height: 1.5,
    width: 330,
    marginBottom: 5,
    marginLeft: 15,
  },
  textInput: {
    marginRight: 20,
    marginBottom: 10,
    textAlign: "right",
  },
});
