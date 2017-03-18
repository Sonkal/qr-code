///<reference path="../season.ts"/>
import {Component, OnInit} from '@angular/core';
import {Season} from "../season";
import {Gym} from "../gym";
import {PaymentCodeGenerator} from "../payment-code-generator";

declare let QRCode: any;

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
    season: Season.CURRENT_SEASON()
  };

  seasons = Season.SEASONS;

  gyms = Gym.GYMS;

  model = Object.assign({}, this.default_model);

  ngOnInit() {
  }

  generate() {
    if (!this.qrCode) {
      let formWrapEl = document.getElementById("form-wrap");
      let dim = formWrapEl.getBoundingClientRect().height - 60;
      this.qrCode = new QRCode(this.qrEl, {
        width: dim,
        height: dim
      });
      this.qrEl.style.width = String(dim);
    }
    this.qrCode.clear();

    let model = this.model;
    let pg = new PaymentCodeGenerator(model.gym, model.season, model.firstName, model.lastName);

    this.qrCode.makeCode(pg.getCode());
    this.qrEl.parentElement.parentElement.style.visibility = "visible";
  }

  clearForm() {
    Object.assign(this.model, this.default_model);
  }
}
