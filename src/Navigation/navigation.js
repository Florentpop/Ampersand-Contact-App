import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import WelcomeScreen from "../screens/WelcomeScreen";
import GetStartedScreen from "../screens/GetStartedScreen";
import LogInScreen from "../screens/LogInScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ScanScreen from "../screens/ScanScreen";
import ScanningScreen from "../screens/ScanningScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ProfileDetailScreen from "../screens/ProfileDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#3b31eb",
          headerTitleAlign: "center",
          headerBackTitle: "",
        }}
      >
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="WelcomeScreen"
          component={WelcomeScreen}
        />

        <Stack.Screen
          options={{
            header: () => null,
            title: "",

            headerStyle: {
              backgroundColor: "white",
            },
            headerTintColor: "black",
            headerTitleAlign: "center",
          }}
          name="GetStartedScreen"
          component={GetStartedScreen}
        />

        <Stack.Screen
          options={{
            title: "SIGN IN",
            headerStyle: {
              backgroundColor: "#d21f3c",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name="LogInScreen"
          component={LogInScreen}
        />

        <Stack.Screen
          options={{
            // header: () => null
            title: "REGISTER",
            headerStyle: {
              backgroundColor: "#d21f3c",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name="RegisterScreen"
          component={RegisterScreen}
        />

        <Stack.Screen
          options={({ route, navigation }) => ({
            title: "QR CODE",
            headerStyle: {
              backgroundColor: "#d21f3c",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProfileDetailScreen");
                }}
                style={{ color: "#3b31eb", marginRight: 20 }}
              >
                <AntDesign name="user" size={24} color="white" />
              </TouchableOpacity>
            ),
          })}
          name="ScanScreen"
          component={ScanScreen}
        />

        <Stack.Screen
          options={{
            header: () => null,
            // title: "REGISTER",
            //   headerStyle:{
            //     backgroundColor:"#de4f45"
            //   },
            //   headerTintColor: "white",
            //   headerTitleAlign: "center",
          }}
          name="ScanningScreen"
          component={ScanningScreen}
        />

        <Stack.Screen
          options={{
            // header: () => null
            title: "My Profile",
            headerStyle: {
              backgroundColor: "#de4f45",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name="ProfileDetailScreen"
          component={ProfileDetailScreen}
        />

        <Stack.Screen
          options={{
            // header: () => null
            title: "Member Profile",
            headerStyle: {
              backgroundColor: "#de4f45",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name="DetailsScreen"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
