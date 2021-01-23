import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Feather,
  MaterialIcons,
  SimpleLineIcons,
  AntDesign,
} from "@expo/vector-icons";

export default function MemberDetailsScreen({ route, navigation }) {
  let DetailsScreen = route.params;
  return (
    <View>
      <View style={styles.Info}>
        <View style={styles.Dp}>
          <Image source={require("../../assets/dp.jpeg")} style={styles.dp} />
          <View style={styles.infoDp}>
            <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 5 }}>
              Florent Francis
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 15 }}>Developer</Text>
          </View>
        </View>

        <View style={styles.logos}>
          <Image
            source={require("../../assets/twitter.png")}
            style={{ height: 50, width: 50, marginRight: 20 }}
          />
          <Image
            source={require("../../assets/linkedin.png")}
            style={{ height: 50, width: 50 }}
          />
        </View>

        <View style={{ flexDirection: "row", marginBottom: 30 }}>
          <Feather name="phone" size={24} color="black" />
          <Text style={{ marginLeft: 10 }}>+233 248206239</Text>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 30 }}>
          <MaterialIcons name="mail-outline" size={24} color="black" />
          <Text style={{ marginLeft: 10 }}>florentpop@gmail.com</Text>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 30 }}>
          <SimpleLineIcons name="location-pin" size={24} color="black" />
          <Text style={{ marginLeft: 10 }}>Tema,Greater Accra</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    backgroundColor: "#de4f45",
    marginTop: 20,
    height: 70,
    alignItems: "center",
    justifyContent: "space-around",
  },
  Info: {
    marginLeft: 30,
  },
  Dp: {
    flexDirection: "row",
    marginTop: 50,
  },
  infoDp: {
    marginLeft: 20,
    marginTop: 10,
  },
  dp: {
    borderRadius: 50,
    height: 80,
    width: 80,
  },
  logos: {
    flexDirection: "row",
    marginVertical: 30,
    // justifyContent:"space-around"
  },
});
