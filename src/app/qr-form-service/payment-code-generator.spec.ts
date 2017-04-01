import {PaymentCodeGenerator} from './payment-code-generator';
import {Gym} from "../qr-form/gym";
import {Season} from "../qr-form/season";

describe('PaymentCodeGenerator', () => {
  it('should create an instance', () => {
    expect(new PaymentCodeGenerator()).toBeTruthy();
  });
  it('should generate code', () => {
    let paymentCodeGenerator = new PaymentCodeGenerator();
    expect(paymentCodeGenerator.generateCode(Gym.GYM_CER, Season.SEASON_1, "Franta", "Ramus")).toBeTruthy();
  });
  it('should generate events', () => {
    let paymentCodeGenerator = new PaymentCodeGenerator();
    let genCode = null;
    paymentCodeGenerator.subscribe((code) => {
      if (genCode === null)
        genCode = code;
      expect(genCode).toEqual(code);
      expect(code).toBeTruthy();
    });
    let code = paymentCodeGenerator.generateCode(Gym.GYM_CER, Season.SEASON_1, "Franta", "Ramus");
    if (genCode === null)
      genCode = code;
    expect(genCode).toEqual(code);
    expect(code).toBeTruthy();
  });
});
