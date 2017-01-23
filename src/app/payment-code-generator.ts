export class PaymentCodeGenerator {
  //SPD*1.0*ACC:CZ2703000000000189640131*AM:1100*CC:CZK*DT:20170118*MSG:Kokot*X-VS:501
  dueDate: string;
  //ToDo: IBAN
  account: string = "CZ2703000000000189640131";

  constructor(private vs: number, private amount: number, private senderName:string) {
    let dt = new Date();
    let month = ""+dt.getMonth() + 1;
    if (month.length < 2)
      month = "0"+month;
    this.dueDate = dt.getFullYear() + "" + (month) + "" + dt.getDate()
  }

  getCode(): string {
    let code: string = "SPD*1.0*AM:" + this.amount + "*X-VS:" + this.vs + "*DT:" + this.dueDate + "*CC:CZK*ACC:" +
      this.account + "*MSG:"+this.senderName;

    //ToDo: message - should be URL encoded?
    //ToDo: check for errors - no stars
    console.log(code)
    return code;
  }
}
