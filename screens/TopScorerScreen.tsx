import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text } from "react-native";

function TopScorerScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Top Scorer Screen</Text>
      <Button
        title={"Hello"}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
}

export default TopScorerScreen;
