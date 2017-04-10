///<reference path="./season.ts"/>
import {Component, OnInit, Input} from '@angular/core';
import {Season} from "./season";
import {Gym} from "./gym";
import {PaymentCodeGenerator} from "../qr-form-service/payment-code-generator";
import LatinConvertor from "../../assets/latinise/latinise_compact";

@Component({
  selector: 'qr-form',
  templateUrl: './qr-form.component.html',
  styleUrls: ['./qr-form.component.css']
})
export class QrFormComponent implements OnInit {
  private latin = true;
  @Input() set latinise(value){this.latin = Boolean(value);}
  get latinise(){return this.latin;}

  private _headless = false;
  @Input() set headless(value){this._headless = Boolean(value);}
  get headless(){return this._headless;}

  static readonly DEFAULT_MODEL = {
    firstName: '',
    lastName: '',
    gym: null,
    season: Season.CURRENT_SEASON()
  };

  seasons = Season.SEASONS;

  gyms = Gym.GYMS;

  model = Object.assign({}, QrFormComponent.DEFAULT_MODEL);

  lConvertor = null;

  constructor(public codeGen:PaymentCodeGenerator){
    this.lConvertor = new LatinConvertor();
  }

  ngOnInit() {
  }

  generate():void {
    let model = this.model;
    this.codeGen.generateCode(model.gym, model.season, this.applyLatin(model.firstName), this.applyLatin(model.lastName));
  }

  clearForm():void {
    Object.assign(this.model, QrFormComponent.DEFAULT_MODEL);
  }

  applyLatin(value:string):string{
    if (this.latin)
    {
      let any = this.lConvertor.convert(value);
      return String(any);}
    else
      return value;
  }
}
