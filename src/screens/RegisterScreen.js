import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function RegisterScreen({ route, navigation }) {
  let RegisterScreen = route.params;
  return (
    <ScrollView style={styles.mainContainer}>
      <Image
        source={require("../../assets/profile.jpg")}
        style={styles.image}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 10, marginLeft: 15 }}>
          Full Name
        </Text>
        <TextInput
          style={{ marginRight: 20, marginBottom: 10 }}
          placeholderTextColor="#aaaaaa"
          placeholder="Florent Francis"
        />
      </View>

      <View
        style={{
          backgroundColor: "#e6e7e8",
          height: 2,
          width: 330,
          marginBottom: 20,
          marginLeft: 15,
        }}
      ></View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 10, marginLeft: 15 }}>
          Email
        </Text>
        <TextInput
          style={{ marginRight: 20, marginBottom: 10 }}
          placeholderTextColor="#aaaaaa"
          placeholder="florentpop@gmail.com"
          secureTextEntry={true}
        />
      </View>

      <View
        style={{
          backgroundColor: "#e6e7e8",
          height: 2,
          width: 330,
          marginBottom: 20,
          marginLeft: 15,
        }}
      ></View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 10, marginLeft: 15 }}>
          Phone Number
        </Text>
        <TextInput
          style={{ marginRight: 20, marginBottom: 10 }}
          placeholderTextColor="#aaaaaa"
          placeholder="+233 248206239"
          secureTextEntry={true}
        />
      </View>

      <View
        style={{
          backgroundColor: "#e6e7e8",
          height: 2,
          width: 330,
          marginBottom: 20,
          marginLeft: 15,
        }}
      ></View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 10, marginLeft: 15 }}>
          Role
        </Text>
        <TextInput
          style={{ marginRight: 20, marginBottom: 10 }}
          placeholderTextColor="#aaaaaa"
          placeholder="Developer"
          secureTextEntry={true}
        />
      </View>

      <View
        style={{
          backgroundColor: "#e6e7e8",
          height: 2,
          width: 330,
          marginBottom: 20,
          marginLeft: 15,
        }}
      ></View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 10, marginLeft: 15 }}>
          Twitter
        </Text>
        <TextInput
          style={{ marginRight: 20, marginBottom: 10, marginLeft: 15 }}
          placeholderTextColor="#aaaaaa"
          placeholder="@florentpop"
          secureTextEntry={true}
        />
      </View>

      <View
        style={{
          backgroundColor: "#e6e7e8",
          height: 2,
          width: 330,
          marginBottom: 20,
          marginLeft: 15,
        }}
      ></View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 10, marginLeft: 15 }}>
          LinkedIn
        </Text>
        <TextInput
          style={{ marginRight: 20, marginBottom: 10 }}
          placeholderTextColor="#aaaaaa"
          placeholder="/florent francis"
          secureTextEntry={true}
        />
      </View>

      <View
        style={{
          backgroundColor: "#e6e7e8",
          height: 2,
          width: 330,
          marginBottom: 20,
          marginLeft: 15,
        }}
      ></View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ScanScreen");
          }}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: "space-around"
  },
  heading: {
    flexDirection: "row",
    backgroundColor: "#de4f45",
    height: 70,
    justifyContent: "space-around",
    alignItems: "center",
  },

  image: {
    height: 190,
    width: "100%",
    // flex: 0.5,
    marginBottom: 15,
  },
  buttonContainer: {
    height: 40,
    width: 320,
    backgroundColor: "#de4f45",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginLeft: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  footer: {
    marginBottom: 50,
  },
});
