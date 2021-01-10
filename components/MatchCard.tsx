import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MatchStruct } from "./Data/MatchStruct";

const MatchCard = (props: MatchStruct) => (
  <View style={styles.item}>
    <View style={styles.homeTeam}>
      <Image
        style={styles.homeLogo}
        source={require("../assets/images/1200px-Chelsea_FC.svg.png")}
      />
      <Text style={styles.homeTeamName}>{props.homeTeam}</Text>
    </View>
    <View style={styles.middleContainer}>
      <Text style={styles.matchday}>Matchday {props.matchday.toString()}</Text>
      <Text style={styles.score}>
        {props.homeGoal.toString()} - {props.awayGoal.toString()}
      </Text>
      <Text style={styles.date}>{props.time} | FT</Text>
    </View>
    <View style={styles.awayTeam}>
      <Image
        style={styles.awayLogo}
        source={require("../assets/images/1200px-Manchester_City_FC_badge.svg.png")}
      />
      <Text style={styles.awayTeamName}>{props.awayTeam}</Text>
    </View>
    {/* <Text style={styles.title}>{props.title}</Text> */}
  </View>
);

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
    fontSize: 12,
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
    fontSize: 12,
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
