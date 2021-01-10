import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NotoBoldText, NotoMediumText, FuturaText } from "./StyledText";

function AppHeader() {
  return (
    // <NotoBoldText>HELLO</NotoBoldText>
    <LinearGradient
      colors={["#8E0101", "#0019F5"]}
      style={styles.gradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <NotoBoldText style={styles.textHeader} numberOfLines={2}>
        Inno{"\n"}Football
      </NotoBoldText>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  textHeader: {
    paddingHorizontal: 10,
    fontSize: 20,
    color: "white",
  },
  gradient: {
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    height: 64,
  },
});
export default AppHeader;
