import React from 'react';
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import FirstScreen from './src/screens/FirstScreen';
import GetStartedScreen from './src/screens/GetStartedScreen';
import LogInScreen from './src/screens/LogInScreen';
import RegisterScreen from "./src/screens/RegisterScreen";
import ScanScreen from "./src/screens/ScanScreen";
import ScanningScreen from "./src/screens/ScanningScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ProfileDetailScreen from "./src/screens/ProfileDetailScreen";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#3b31eb",
          headerTitleAlign: "center",
          headerBackTitle:""
        }}
      >
        <Stack.Screen
          options={{
            header: () => null
          }}
          name='FirstScreen' component={FirstScreen} />

        <Stack.Screen
          options={{
            // header: () => null
              title: "",
              
              headerStyle:{
                backgroundColor:"white"
              },
              headerTintColor: "black",
              headerTitleAlign: "center",
          }}
          name='GetStartedScreen' 
          component={GetStartedScreen} 
          />

        <Stack.Screen
          options={{
            title: "SIGN IN",
            headerStyle:{
              backgroundColor:"#de4f45"
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name='LogInScreen' component={LogInScreen} />

        <Stack.Screen
          options={{
            // header: () => null
            title: "REGISTER",
            headerStyle:{
              backgroundColor:"#de4f45"
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name='RegisterScreen' component={RegisterScreen} />

        <Stack.Screen
                options={({route, navigation}) => ({
                  title: "CODETRAIN",
            headerStyle:{
              backgroundColor:"#de4f45"
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerRight:() => (<TouchableOpacity onPress={() => { navigation.navigate("ProfileDetailScreen") 
            }}style={{ color: "#3b31eb", marginRight: 20 }}>
              <AntDesign name="user" size={24} color="white" /></TouchableOpacity>)
           
          })}
          name='ScanScreen' component={ScanScreen} />

        <Stack.Screen
          options={{
            header: () => null
          // title: "REGISTER",
          //   headerStyle:{
          //     backgroundColor:"#de4f45"
          //   },
          //   headerTintColor: "white",
          //   headerTitleAlign: "center",
          }}
          name='ScanningScreen' component={ScanningScreen} />

        <Stack.Screen
          options={{
            // header: () => null
            title: "My Profile",
            headerStyle:{
              backgroundColor:"#de4f45"
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name='ProfileDetailScreen' component={ProfileDetailScreen} />

        <Stack.Screen
          options={{
            // header: () => null
            title: "Member Profile",
            headerStyle:{
              backgroundColor:"#de4f45"
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          name='DetailsScreen' component={DetailsScreen} />


      </Stack.Navigator>

    </NavigationContainer>


  );
}