export class Gym {
  public static GYM_CER:Gym = {label: 'Černý Most',code: 4};
  public static GYM_PET:Gym = {label: 'Petřiny',code: 5};
  public static GYM_POC:Gym = {label: 'Horní Počernice',code: 6};
  public static GYMS = [Gym.GYM_CER,Gym.GYM_PET, Gym.GYM_POC];

  label: string;
  code: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
