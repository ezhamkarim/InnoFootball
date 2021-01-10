import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { NotoMediumText } from "./StyledText";
import PLEmblem from "../assets/images/premier-league-1.svg";
import BLEmblem from "../assets/images/bundesliga.svg";
import L1Emblem from "../assets/images/ligue-1.svg";
import SAEmblem from "../assets/images/serie-a-seeklogo.com.svg";
import LLEmblem from "../assets/images/laliga-1.svg";

import { SelectLeague } from "../types";
import { SvgProps } from "react-native-svg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

// type LeagueEmblem = {
//   pl: React.FC<SvgProps>;
//   bundesliga: React.FC<SvgProps>;
//   laliga: React.FC<SvgProps>;
//   serieA: React.FC<SvgProps>;
//   ligue1: React.FC<SvgProps>;
// };
function LeagueHeader(selectedLeague: SelectLeague) {
  const navigation = useNavigation();
  // const leagueEmblem: LeagueEmblem[] = [
  //   { league: "bundesliga", emblem: BLEmblem },
  //   { league: "laliga", emblem: LLEmblem },
  //   { league: "serieA", emblem: SAEmblem },
  //   { league: "pl", emblem: PLEmblem },
  //   { league: "ligue1", emblem: L1Emblem },
  // ];

  const leagueEmblem: Record<string, JSX.Element> = {
    pl: <PLEmblem width={35} height={35} />,
    bundesliga: <BLEmblem width={65} height={65} />,
    laliga: <LLEmblem width={55} height={55} />,
    ligue1: <L1Emblem width={35} height={35} />,
    serieA: <SAEmblem width={35} height={35} />,
  };

  return (
    <View style={styles.rowHeaderView}>
      {leagueEmblem[selectedLeague.league]}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Standing");
        }}
      >
        <NotoMediumText style={styles.rowHeader}>Standings</NotoMediumText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TopScorer");
        }}
      >
        <NotoMediumText style={styles.rowHeader}>Stats</NotoMediumText>
      </TouchableOpacity>
    </View>
  );
}

export default LeagueHeader;

const styles = StyleSheet.create({
  rowHeaderView: {
    flex: 1,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  rowHeader: {
    color: "black",
  },
});
