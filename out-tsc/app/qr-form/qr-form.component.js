var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Season } from "../season";
import { Gym } from "../gym";
import { PaymentCodeGenerator } from "../payment-code-generator";
export var QrFormComponent = (function () {
    function QrFormComponent() {
        // QR Core wrapper element
        this.qrEl = document.getElementById("qrcode");
        this.qrCode = null;
        this.default_model = {
            firstName: '',
            lastName: '',
            gym: null,
            season: Season.CURRENT_SEASON()
        };
        this.seasons = Season.SEASONS;
        this.gyms = Gym.GYMS;
        this.model = Object.assign({}, this.default_model);
    }
    QrFormComponent.prototype.ngOnInit = function () {
    };
    QrFormComponent.prototype.generate = function () {
        if (!this.qrCode) {
            var formWrapEl = document.getElementById("form-wrap");
            var dim = formWrapEl.getBoundingClientRect().height - 60;
            this.qrCode = new QRCode(this.qrEl, {
                width: dim,
                height: dim
            });
            this.qrEl.style.width = String(dim);
        }
        this.qrCode.clear();
        var amount = 1100;
        //ToDo: amount 1300 if delayed
        var pg = new PaymentCodeGenerator(this.model.gym.code * 100 + this.model.season.code, amount, this.model.firstName + " " + this.model.lastName);
        this.qrCode.makeCode(pg.getCode());
        this.qrEl.parentElement.parentElement.style.visibility = "visible";
    };
    QrFormComponent.prototype.clearForm = function () {
        Object.assign(this.model, this.default_model);
    };
    QrFormComponent = __decorate([
        Component({
            selector: 'app-qr-form',
            templateUrl: './qr-form.component.html',
            styleUrls: ['./qr-form.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], QrFormComponent);
    return QrFormComponent;
}());
//# sourceMappingURL=W:/Code/sonkal/qr-code/src/app/qr-form/qr-form.component.js.map