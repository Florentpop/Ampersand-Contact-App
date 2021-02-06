import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function WelcomeScreen({ route, navigation }) {
  let welcomeScreen = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../assets/logo.png")} style={styles.photo} />
      </View>

      <View>
        <Text style={{ fontSize: 18, alignContent: "center" }}>CODETRAIN</Text>
        <Text style={{ fontSize: 18, alignContent: "center" }}>CONTACTS</Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("GetStartedScreen");
          }}
        >
          <Text>GET STARTED</Text>
          <Text style={styles.redLine}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  photo: {
    height: 47,
    width: 240,
    marginTop: 30,
  },
  redLine: {
    height: 1.5,
    width: 84,
    backgroundColor: "#d21f3c",
    marginLeft: 10,
  },
});
