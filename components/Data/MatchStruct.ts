export class MatchStruct {
  matchId: number;
  matchday: number;
  homeTeam: string;
  awayTeam: string;
  homeGoal: number;
  awayGoal: number;
  status: string;
  time: string;

  constructor(userResponse: any) {
    this.matchId = userResponse.id;
    this.matchday = userResponse.matchday;
    this.homeTeam = userResponse.homeTeam.name;
    this.awayTeam = userResponse.awayTeam.name;
    if (userResponse.score.fullTime.homeTeam === null) {
      this.homeGoal = 0;
    } else {
      this.homeGoal = userResponse.score.fullTime.homeTeam;
    }

    if (userResponse.score.fullTime.awayTeam === null) {
      this.awayGoal = 0;
    } else {
      this.awayGoal = userResponse.score.fullTime.awayTeam;
    }

    this.status = userResponse.status;
    this.time = userResponse.utcDate;
  }
}
