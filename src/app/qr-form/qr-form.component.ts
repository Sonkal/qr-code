///<reference path="../season.ts"/>
import {Component, OnInit} from '@angular/core';
import {Season} from "../season";
import {Gym} from "../gym";
import {PaymentCodeGenerator} from "../payment-code-generator";

declare var QRCode: any;

@Component({
  selector: 'app-qr-form',
  templateUrl: './qr-form.component.html',
  styleUrls: ['./qr-form.component.css']
})
export class QrFormComponent implements OnInit {
  // QR Core wrapper element
  qrEl = document.getElementById("qrcode");
  qrCode = null;

  default_model = {
    firstName: '',
    lastName: '',
    gym: null,
    season: Season.SEASON_1,
    amount: 1100
  }

  seasons = Season.SEASONS;

  gyms = Gym.GYMS;

  model = Object.assign({}, this.default_model);

  ngOnInit() {
  }

  generate() {
    if (!this.qrCode){
      let formWrapEl = document.getElementById("form-wrap");
      let dim = formWrapEl.getBoundingClientRect().height - 60;
      this.qrCode = new QRCode(this.qrEl, {
        width: dim ,
        height: dim
      });
      this.qrEl.style.width = String(dim);
    }
    this.qrCode.clear();

    let amount:number = 1100;
    //ToDo: amount 1300 if delayed
    let pg = new PaymentCodeGenerator(this.model.gym.code*100+this.model.season.code,amount,
      this.model.firstName+" "+this.model.lastName);

    this.qrCode.makeCode(pg.getCode());
    this.qrEl.parentElement.parentElement.style.visibility = "visible";
  }

  clearForm() {
    Object.assign(this.model, this.default_model);
  }
}