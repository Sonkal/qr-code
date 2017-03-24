const NORMAL_PRICE: number = 1100;
const HIGH_PRICE: number = 1100;

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

  // returns the next season to pay
  // in the first month of the season, it is considered as the next season
  // the amount will be higher after 16th (penalty)
  // e.g. 15.2. => Season 2
  // 15.4. => Season 2 (regular)
  // 16.4. => Season 2 (penalty)
  static CURRENT_SEASON(date:Date = new Date()): Season {
    let month = date.getMonth() + 1;
    let matchingS = Season.SEASONS.filter(s => s.month >= month);
    if (matchingS.length > 0)
      return matchingS[0];
    return Season.SEASON_1;
  }

  amount(date:Date = new Date()): number {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month <= this.month && day < 16)
      return NORMAL_PRICE;
    return HIGH_PRICE;
  }
}
