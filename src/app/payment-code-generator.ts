import {Gym} from "./qr-form/gym";
import {Season} from "./qr-form/season";

export class PaymentCodeGenerator {
  //SPD*1.0*ACC:CZ2703000000000189640131*AM:1100*CC:CZK*DT:20170118*MSG:Kokot*X-VS:501
  dueDate: string;
  //ToDo: IBAN
  account: string = "CZ5420100000000189640131";
  vs: number;
  amount: number;

  constructor(gym: Gym, season: Season, private firstName: string, private lastName: string) {
    this.vs = gym.code * 100 + season.code;
    this.amount = season.amount();
    this.dueDate = PaymentCodeGenerator.CURRENT_DATE_TO_STRING();
  }

  private static CURRENT_DATE_TO_STRING(): string {
    let dt = new Date();
    let monthNumber = dt.getMonth() + 1;
    let monthString = monthNumber.toString();
    if (monthString.length < 2)
      monthString = "0" + monthString;
    return `${dt.getFullYear()}${monthString}${dt.getDate()}`;
  }

  getCode(): string {
    let code: string = `SPD*1.0*AM:${this.amount}*X-VS:${this.vs}*DT:${this.dueDate }*` +
      `CC:CZK*ACC:${this.account}*MSG:${encodeURI(this.firstName)} ${encodeURI(this.lastName)}`;
    //ToDo: check for errors - no stars
    console.log(code);
    return code;
  }
}
