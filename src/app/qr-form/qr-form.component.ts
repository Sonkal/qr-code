///<reference path="./season.ts"/>
import {Component, OnInit} from '@angular/core';
import {Season} from "./season";
import {Gym} from "./gym";
import {PaymentCodeGenerator} from "../qr-form-service/payment-code-generator";


@Component({
  selector: 'qr-form',
  templateUrl: './qr-form.component.html',
  styleUrls: ['./qr-form.component.css']
})
export class QrFormComponent implements OnInit {

  static readonly DEFAULT_MODEL = {
    firstName: '',
    lastName: '',
    gym: null,
    season: Season.CURRENT_SEASON()
  };

  seasons = Season.SEASONS;

  gyms = Gym.GYMS;

  model = Object.assign({}, QrFormComponent.DEFAULT_MODEL);

  constructor(public codeGen:PaymentCodeGenerator){
  }

  ngOnInit() {
  }

  generate():void {
    let model = this.model;
    this.codeGen.generateCode(model.gym, model.season, model.firstName, model.lastName);
  }

  clearForm():void {
    Object.assign(this.model, QrFormComponent.DEFAULT_MODEL);
  }
}
