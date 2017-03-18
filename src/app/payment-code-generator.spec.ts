import {PaymentCodeGenerator} from './payment-code-generator';
import {Gym} from "./gym";
import {Season} from "./season";

describe('PaymentCodeGenerator', () => {
  it('should create an instance', () => {
    expect(new PaymentCodeGenerator(Gym.GYM_CER,Season.SEASON_1,"Franta","Ramus")).toBeTruthy();
  });
});
