import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MatchStruct } from "./Data/MatchStruct";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "../types";

//

const MatchCard = (props: MatchStruct) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details", { itemId: props.matchId });
      }}
    >
      <View style={styles.item}>
        <Text style={styles.homeTeamName}>{props.homeTeam}</Text>
        <View style={styles.middleContainer}>
          <Text style={styles.matchday}>
            Matchday {props.matchday.toString()}
          </Text>
          <Text style={styles.score}>
            {props.homeGoal.toString()} - {props.awayGoal.toString()}
          </Text>
          <Text style={styles.date}>{props.time} | FT</Text>
        </View>
        <Text style={styles.awayTeamName}>{props.awayTeam}</Text>
      </View>
    </TouchableOpacity>

    // <View style={styles.item}>
    //   <View style={styles.homeTeam}>
    //     <Image
    //       style={styles.homeLogo}
    //       source={require("../assets/images/1200px-Chelsea_FC.svg.png")}
    //     />
    //     <Text style={styles.homeTeamName}>{props.homeTeam}</Text>
    //   </View>
    //   <View style={styles.middleContainer}>
    //     <Text style={styles.matchday}>Matchday {props.matchday.toString()}</Text>
    //     <Text style={styles.score}>
    //       {props.homeGoal.toString()} - {props.awayGoal.toString()}
    //     </Text>
    //     <Text style={styles.date}>{props.time} | FT</Text>
    //   </View>
    //   <View style={styles.awayTeam}>
    //     <Image
    //       style={styles.awayLogo}
    //       source={require("../assets/images/1200px-Manchester_City_FC_badge.svg.png")}
    //     />
    //     <Text style={styles.awayTeamName}>{props.awayTeam}</Text>
    //   </View>
    // </View>
  );
};

export default MatchCard;

const styles = StyleSheet.create({
  homeLogo: {
    justifyContent: "center",
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  awayLogo: {
    justifyContent: "center",
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  homeTeamName: {
    textAlign: "center",
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  homeTeam: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 15,
    // backgroundColor: "red",
  },
  awayTeamName: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  awayTeam: {
    // backgroundColor: "red",
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 15,
    alignItems: "center",
  },
  middleContainer: {
    height: 180,
    flex: 1,
    alignItems: "center",

    justifyContent: "space-around",
  },
  matchday: {
    fontSize: 12,
    fontFamily: "noto-medium",
  },
  score: {
    fontSize: 30,
    fontFamily: "noto-medium",
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    fontFamily: "noto-medium",
  },
  item: {
    flexDirection: "row",
    height: 180,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9c2ff",
    borderRadius: 12,
    padding: 16,
    marginVertical: 20,
    marginHorizontal: 16,
  },
  title: {
    color: "green",
    fontSize: 32,
  },
});
