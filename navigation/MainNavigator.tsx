import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackParamList } from "../types";
import MainMenuScreen from "../screens/MainMenuScreen";
import MatchDetails from "../screens/MatchDetails";
import StandingsScreen from "../screens/StandingsScreen";
import TopScorerScreen from "../screens/TopScorerScreen";

const MainStack = createStackNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Main" component={MainMenuScreen} />
      <MainStack.Screen name="Details" component={MatchDetails} />
      <MainStack.Screen name="Standing" component={StandingsScreen} />
      <MainStack.Screen name="TopScorer" component={TopScorerScreen} />
    </MainStack.Navigator>
  );
}

export default MainNavigator;
