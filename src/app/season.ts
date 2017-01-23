
export class Season {
  public static SEASON_1:Season = {label: 'Leden - Březen',code: 1};
  public static SEASON_2:Season = {label: 'Duben - Červen',code: 2};
  public static SEASON_3:Season = {label: 'Září - Prosinec',code: 3};

  static SEASONS = [Season.SEASON_1, Season.SEASON_2, Season.SEASON_3];

  label: string;
  code: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
