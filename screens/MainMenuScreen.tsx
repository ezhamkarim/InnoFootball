import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  Picker,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/AppHeader";
import LeagueHeader from "../components/LeagueHeader";
import DropDownPicker from "react-native-dropdown-picker";
import { SelectLeague } from "../types";
import MatchCard from "../components/MatchCard";
import getMatches from "../hooks/GetMatches";
import GetMatches from "../hooks/GetMatches";

interface MatchListType {
  id: string;
  title: string;
}

const DATA: MatchListType[] = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
];
const leagueId: Record<string, string> = {
  pl: "2021",
  laliga: "2014",
  bundesliga: "2002",
  ligue1: "2015",
  serieA: "2019",
};
function MainMenuScreen() {
  const [league, setLeague] = useState("pl");
  const [loading, setLoading] = useState(false);

  const selectValue = (itemValue: string) => {
    setLeague(itemValue);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",

        flex: 1,
      }}
    >
      <View style={styles.header}>
        <View style={styles.leagueHeader}>
          <AppHeader />
          <LeagueHeader league={league} />
        </View>
        <View style={styles.leagueBody}>
          <Text>Matches</Text>
          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={league}
              style={styles.dropdown}
              onValueChange={selectValue}
            >
              <Picker.Item label="Premier League" value="pl" />
              <Picker.Item label="La Liga" value="laliga" />
              <Picker.Item label="Bundesliga" value="bundesliga" />
              <Picker.Item label="Ligue 1" value="ligue1" />
              <Picker.Item label="Serie A" value="serieA" />
            </Picker>
          </View>
        </View>
      </View>
      <GetMatches league={leagueId[league]} />
    </SafeAreaView>
    //   <SafeAreaView
    //     style={{
    //       backgroundColor: "white",

    //       flex: 1,
    //     }}
    //   >
    //     <FlatList
    //       style={styles.flatlist}
    //       ListHeaderComponent={
    //         <>
    //           <View style={styles.leagueHeader}>
    //             <AppHeader />
    //             <LeagueHeader league={league} />
    //           </View>
    //           <View style={styles.leagueBody}>
    //             <Text>Matches</Text>
    //             <View style={styles.dropdownContainer}>
    //               <Picker
    //                 selectedValue={league}
    //                 style={styles.dropdown}
    //                 onValueChange={selectValue}
    //               >
    //                 <Picker.Item label="Premier League" value="pl" />
    //                 <Picker.Item label="La Liga" value="laliga" />
    //                 <Picker.Item label="Bundesliga" value="bundesliga" />
    //                 <Picker.Item label="Ligue 1" value="ligue1" />
    //                 <Picker.Item label="Serie A" value="serieA" />
    //               </Picker>
    //             </View>
    //           </View>
    //         </>
    //       }
    //       data={DATA}
    //       renderItem={renderItem}
    //       keyExtractor={(item, index) => index.toString()}
    //       ListFooterComponent={<Text>Inno football 2021</Text>}
    //     />
    //   </SafeAreaView>
  );
}

export default MainMenuScreen;

const styles = StyleSheet.create({
  header: {
    height: "25%",
  },
  leagueHeader: {
    //backgroundColor: "grey",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 40,
    flex: 1,
  },
  leagueBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 40,
    paddingHorizontal: 40,
  },
  matchList: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  scrollView: {
    backgroundColor: "pink",
  },
  dropdownContainer: {
    backgroundColor: "#E2E2E2",
  },
  dropdown: {
    fontSize: 12,
    width: 180,
    height: 30,
  },

  flatlist: {},
});
