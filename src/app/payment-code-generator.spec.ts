import {PaymentCodeGenerator} from './payment-code-generator';
import {Gym} from "./qr-form/gym";
import {Season} from "./qr-form/season";

describe('PaymentCodeGenerator', () => {
  it('should create an instance', () => {
    expect(new PaymentCodeGenerator(Gym.GYM_CER,Season.SEASON_1,"Franta","Ramus")).toBeTruthy();
  });
});
