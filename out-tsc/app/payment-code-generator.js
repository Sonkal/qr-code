export var PaymentCodeGenerator = (function () {
    function PaymentCodeGenerator(vs, amount, senderName) {
        this.vs = vs;
        this.amount = amount;
        this.senderName = senderName;
        //ToDo: IBAN
        this.account = "CZ2703000000000189640131";
        var dt = new Date();
        var month = "" + dt.getMonth() + 1;
        if (month.length < 2)
            month = "0" + month;
        this.dueDate = dt.getFullYear() + "" + (month) + "" + dt.getDate();
    }
    PaymentCodeGenerator.prototype.getCode = function () {
        var code = "SPD*1.0*AM:" + this.amount + "*X-VS:" + this.vs + "*DT:" + this.dueDate + "*CC:CZK*ACC:" +
            this.account + "*MSG:" + encodeURI(this.senderName);
        //ToDo: check for errors - no stars
        console.log(code);
        return code;
    };
    return PaymentCodeGenerator;
}());
//# sourceMappingURL=W:/Code/sonkal/qr-code/src/app/payment-code-generator.js.map