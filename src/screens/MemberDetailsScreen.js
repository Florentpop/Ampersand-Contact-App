import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

export default function DetailsScreen() {
  return (
    <View>
      <View style={styles.heading}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("GetStartedScreen");
          }}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: "white" }}> Member Profile</Text>
      </View>

      <View style={styles.Dp}>
        <Image source={require("../../assets/dp.jpg")} style={styles.dp} />
        <View style={styles.infoDp}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            florent Francis
          </Text>
          <Text style={{ fontWeight: "400", fontSize: 15 }}>Developer</Text>
        </View>

        <View style={styles.logos}>
          <Image source={require("../../assets/twitter.png")} />
          <Image source={require("../../assets/linkedin.png")} />
        </View>

        <View style={{ flexDirection: "row" }}>
          <Feather name="phone" size={24} color="black" />
          <Text>+233 248206239</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="mail-outline" size={24} color="black" />
          <Text>florentpop@gmail.com</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <SimpleLineIcons name="location-pin" size={24} color="black" />
          <Text>Tema,Greater Accra</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
