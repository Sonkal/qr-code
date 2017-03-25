import {Gym} from "../qr-form/gym";
import {Season} from "../qr-form/season";
import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class PaymentCodeGenerator {
  //SPD*1.0*ACC:CZ2703000000000189640131*AM:1100*CC:CZK*DT:20170118*MSG:Kokot*X-VS:501
  //ToDo: IBAN
  static readonly ACOUNT: string = "CZ5420100000000189640131";

  emitter = new EventEmitter();

  constructor() {
  }

  generateCode(gym: Gym, season: Season, firstName: string, lastName: string): string{
    let amount:number = season.amount();
    let vs:number = gym.code * 100 + season.code;
    let dueDateStr:string = PaymentCodeGenerator.CURRENT_DATE_TO_STRING();

    let code: string = `SPD*1.0*AM:${amount}*X-VS:${vs}*DT:${dueDateStr}*` +
      `CC:CZK*ACC:${PaymentCodeGenerator.ACOUNT}*MSG:${encodeURI(firstName)} ${encodeURI(lastName)}`;
    //ToDo: check for errors - no stars
    console.log(code);
    this.emitter.emit(code);
    return code;
  }

  subscribe(f):void{
    this.emitter.subscribe(f);
  }

  private static CURRENT_DATE_TO_STRING(): string {
    let dt = new Date();
    let monthNumber = dt.getMonth() + 1;
    let monthString = monthNumber.toString();
    if (monthString.length < 2)
      monthString = "0" + monthString;
    return `${dt.getFullYear()}${monthString}${dt.getDate()}`;
  }
}
