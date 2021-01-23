import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import { QRCode } from "react-native-custom-qr-codes-expo";

export default function ScanScreen({ route, navigation }) {
  let ScanScreen = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            marginBottom: 5,
            marginRight: 70,
          }}
        >
          Exchange Contact Information
        </Text>
        <Text
          style={{
            fontSize: 15,
          }}
        >
          Scan this QR below to share your contacts
        </Text>
      </View>

      <View style={styles.QRCode}>
        <QRCode content="https://codetraingh.com" size={200} />
      </View>

      <View style={styles.mainDp}>
        <Image source={require("../../assets/dp.jpeg")} style={styles.dp} />
        <View style={styles.infoDp}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Kofi Ansah</Text>
          <Text style={{ fontWeight: "400", fontSize: 15 }}>Technician</Text>
        </View>
      </View>

      <View>
        <View
          style={{
            backgroundColor: "#b2b9bf",
            height: 2,
            //  width: 360, marginBottom: 30
          }}
        ></View>
        <View style={styles.footer}>
          <Text
            style={{
              marginHorizontal: 20,
            }}
          >
            Want to add a new connection?
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ScanningScreen");
              }}
              style={styles.scan}
            >
              <Text style={{ color: "red" }}>Scan QR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },

  heading: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#de4f45",
    height: 85,
    justifyContent: "space-around",
  },
  left: {
    color: "white",
  },
  texts: {
    marginTop: 40,
    alignItems: "center",
  },

  logo: {
    height: 35,
    width: 200,
  },

  QRCode: {
    alignItems: "center",
  },
  mainDp: {
    flexDirection: "row",
    marginVertical: 40,
    marginLeft: 50,
  },
  dp: {
    borderRadius: 50,
    height: 80,
    width: 80,
  },
  infoDp: {
    flexDirection: "column",
    marginLeft: 20,
    marginTop: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  scan: {
    backgroundColor: "white",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "red",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
  },
});
