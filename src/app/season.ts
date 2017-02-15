export class Season {
  public static SEASON_1: Season = new Season({label: 'Leden - Březen', code: 1, month: 1});
  public static SEASON_2: Season = new Season({label: 'Duben - Červen', code: 2, month: 4});
  public static SEASON_3: Season = new Season({label: 'Září - Prosinec', code: 3, month: 9});

  static SEASONS = [Season.SEASON_1, Season.SEASON_2, Season.SEASON_3];

  label: string;
  code: number;
  month: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  static CURRENT_SEASON(): Season {
    let month = new Date().getMonth()+1;
    let matchingS = Season.SEASONS.filter(s => s.month >= month);
    if (matchingS.length > 0)
      return matchingS[0];
    return Season.SEASON_1;
  }

  amount(): number {
    let date = new Date();
    let month = date.getMonth()+1;
    let day = date.getDate();
    if (month <= this.month && day < 16)
      return 1100;
    return 1300;
  }
}
