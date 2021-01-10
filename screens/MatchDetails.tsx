import React from "react";
import { Text, View, Button, StatusBar } from "react-native";
import {
  useNavigation,
  useRoute,
  RouteProp,
  Route,
} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DetailsParam,
  MainStackParamList,
  MainNavigationProps,
} from "../types";
import { StackNavigationProp } from "@react-navigation/stack";

function MatchDetails({ navigation, route }: MainNavigationProps<"Details">) {
  const item = route.params;
  const navigationHook = useNavigation();
  const routeParam = useRoute<RouteProp<MainStackParamList, "Details">>();
  const itemParam = routeParam.params;

  return (
    <SafeAreaView>
      <Text>Match Details Screen {itemParam.itemId}</Text>
      <Button
        title={"Hello"}
        onPress={() => {
          navigation.goBack();
        }}
      >
        Go back
      </Button>
    </SafeAreaView>
  );
}

export default MatchDetails;
