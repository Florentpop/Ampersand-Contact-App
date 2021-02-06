import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function RegisterScreen({ route, navigation }) {
  let RegisterScreen = route.params;

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        style={styles.frame}
      >
        <Button
          title="Pick from Image Library"
          onPress={pickImage}
          style={styles.image}
        />
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
            }}
          />
        )}
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.textName}>Full Name</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#aaaaaa"
          placeholder="Florent Francis"
        />
      </View>

      <View style={styles.line}></View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.textName}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#aaaaaa"
          placeholder="florentpop@gmail.com"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.line}></View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.textName}>Phone Number</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#aaaaaa"
          placeholder="+233 248206239"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.line}></View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.textName}>Role</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#aaaaaa"
          placeholder="Developer"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.line}></View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.textName}>Twitter</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#aaaaaa"
          placeholder="@florentpop"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.line}></View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.textName}>LinkedIn</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#aaaaaa"
          placeholder="/florent francis"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.line}></View>

      <View style={styles.regBtn}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ScanScreen");
          }}
          style={styles.regButton}
        >
          <Text style={styles.regText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  frame: {
    height: 200,
    width: 250,
    marginLeft: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: 190,
    width: "100%",
    marginBottom: 15,
  },
  regButton: {
    height: 40,
    width: 320,
    backgroundColor: "#d21f3c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginLeft: 20,
  },
  regText: {
    color: "white",
    fontSize: 15,
  },
  regBtn: {
    marginBottom: 50,
  },
  textName: {
    marginBottom: 10,
    marginLeft: 15,
  },
  line: {
    backgroundColor: "#e6e7e8",
    height: 1.5,
    width: 330,
    marginBottom: 20,
    marginLeft: 15,
  },
  textInput: {
    marginRight: 20,
    marginBottom: 10,
    textAlign: "right",
  },
});
