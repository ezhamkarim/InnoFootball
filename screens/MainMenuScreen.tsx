import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/AppHeader";
import LeagueHeader from "../components/LeagueHeader";

function MainMenuScreen() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",

        flex: 1,
      }}
    >
      <View style={styles.leagueHeader}>
        <AppHeader />
        <LeagueHeader />
      </View>
    </SafeAreaView>
  );
}

export default MainMenuScreen;

const styles = StyleSheet.create({
  leagueHeader: {
    flexDirection: "row",
    paddingTop: 40,
  },
});
