import React from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import fonts from "./assets/fonts";

import Tabs from "./navigation/tabs";
import { CryptoDetail, Transaction } from "./screens";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = Font.useFonts(fonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
          <Stack.Screen name="Transaction" component={Transaction} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
