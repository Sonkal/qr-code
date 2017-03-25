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

  default_model = {
    firstName: '',
    lastName: '',
    gym: null,
    season: Season.CURRENT_SEASON()
  };

  seasons = Season.SEASONS;

  gyms = Gym.GYMS;

  model = Object.assign({}, this.default_model);

  constructor(private codeGen:PaymentCodeGenerator){
  }

  ngOnInit() {
  }

  generate() {
    let model = this.model;
    let pg = this.codeGen.generateCode(model.gym, model.season, model.firstName, model.lastName);
  }

  clearForm() {
    Object.assign(this.model, this.default_model);
  }
}
