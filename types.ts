import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainStackParamList = {
  Main: undefined;
  Standing: undefined;
  Details: DetailsParam;
  TopScorer: undefined;
};
export type MainNavigationProps<T extends keyof MainStackParamList> = {
  navigation: StackNavigationProp<MainStackParamList, T>;
  route: RouteProp<MainStackParamList, T>;
};
export type SelectLeague = {
  league: string;
};
export type DetailsParam = {
  itemId: string;
};

export type StandingParam = {};
export type ScoreParam = {};
export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
