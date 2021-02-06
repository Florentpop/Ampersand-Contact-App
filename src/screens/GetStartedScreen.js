import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function GetStartedScreen({ route, navigation }) {
  let startScreen = route.params;
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/img.jpg")} style={styles.photo} />

      <View style={{ marginTop: 25 }}>
        <Text style={{ fontSize: 18, marginLeft: 20, marginRight: 10 }}>
          KEEP IN TOUCH WITH THE PEOPLE OF CODETRAIN
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 20,
            marginRight: 10,
            marginTop: 10,
            color: "grey",
          }}
        >
          Sign in or register with your Codetain email.
        </Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.bottom}
          onPress={() => {
            navigation.navigate("RegisterScreen");
          }}
        >
          <View>
            <Text style={{ fontSize: 16 }}>REGISTER</Text>
            <View
              style={{
                backgroundColor: "#d21f3c",
                height: 2,
                width: 80,
                marginLeft: 3,
              }}
            ></View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottom}
          onPress={() => {
            navigation.navigate("LogInScreen");
          }}
        >
          <View>
            <Text style={{ fontSize: 16 }}>SIGN IN</Text>
            <View
              style={{
                backgroundColor: "#d21f3c",
                height: 2,
                width: 65,
                marginLeft: 3,
              }}
            ></View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    flex: 0.35,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    marginBottom: 20,
  },

  photo: {
    height: 400,
    width: "100%",
    flex: 1,
  },
});
