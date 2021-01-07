import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { NotoMediumText } from "./StyledText";
import SvgUri from "react-native-svg-uri";

function LeagueHeader() {
  return (
    <View style={styles.rowHeaderView}>
      <NotoMediumText style={styles.rowHeader}>Standings</NotoMediumText>
      <NotoMediumText style={styles.rowHeader}>Stats</NotoMediumText>
    </View>
  );
}

export default LeagueHeader;

const styles = StyleSheet.create({
  rowHeaderView: {
    flex: 1,
    backgroundColor: "grey",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  rowHeader: {
    color: "black",
  },
});
