import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

function StandingsScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Standing Screen</Text>
      <Button
        title={"Hello"}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
}

export default StandingsScreen;
