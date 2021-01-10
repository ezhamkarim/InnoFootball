import React from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { ColorSchemeName, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import MainNavigator from "./MainNavigator";

type PropsColors = {
  colorScheme: ColorSchemeName;
};

function IndexNavigator({ colorScheme }: PropsColors) {
  return (
    <NavigationContainer
    //   theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <MainNavigator />
    </NavigationContainer>
  );
}
export default IndexNavigator;

const Stack = createStackNavigator<RootStackParamList>();

function RootIndexNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={MainNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
