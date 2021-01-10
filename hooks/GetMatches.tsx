import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FlatList, Text } from "react-native";
import MatchCard from "../components/MatchCard";
import { MatchStruct } from "../components/Data/MatchStruct";
function GetMatches(props: { league: string }) {
  const flatlistref = useRef(null);
  const [matches, setMatches] = useState<MatchStruct[]>([]);
  const [currentMatchday, setcurrentMatchday] = useState(1);
  const [matchdayIndex, setMatchdayIndex] = useState(0);
  useEffect(() => {
    axios
      .get(
        `https://api.football-data.org/v2/competitions/${props.league}/matches`,
        {
          headers: { "X-Auth-Token": "4f1c1276d9c44781887a13f808bac067" },
        }
      )
      .then((response) => {
        let matchesArray: MatchStruct[] = [];
        for (let index = 0; index < response.data.matches.length; index++) {
          // console.log("HELLLOOO");
          // let matchs = new MatchStruct(response.data.matches[index]);
          // console.log(matchs);

          matchesArray.push(new MatchStruct(response.data.matches[index]));
          setcurrentMatchday(
            response.data.matches[index].season.currentMatchday
          );
        }
        setMatchdayIndex(
          matchesArray.findIndex((match) => match.matchday === currentMatchday)
        );
        console.log(`current reference ${flatlistref.current}`);

        console.log(matchdayIndex);
        setMatches(matchesArray);
        console.log(currentMatchday);
        console.log(matches);
      })
      .catch((e) => {});
  }, [props.league, matchdayIndex]);

  return (
    <FlatList<MatchStruct>
      ref={() => flatlistref}
      initialScrollIndex={matchdayIndex}
      getItemLayout={(data, index) => {
        return {
          length: 200,
          offset: 200 * index,
          index,
        };
      }}
      data={matches}
      renderItem={({ item }) => {
        return (
          <MatchCard
            matchId={item.matchId}
            homeGoal={item.homeGoal}
            awayGoal={item.awayGoal}
            matchday={item.matchday}
            awayTeam={item.awayTeam}
            homeTeam={item.homeTeam}
            status={item.status}
            time={item.time}
          />
        );
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default GetMatches;
