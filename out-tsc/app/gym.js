export var Gym = (function () {
    function Gym(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    Gym.GYM_CER = { label: 'Černý Most', code: 4 };
    Gym.GYM_PET = { label: 'Petřiny', code: 5 };
    Gym.GYM_POC = { label: 'Horní Počernice', code: 6 };
    Gym.GYMS = [Gym.GYM_CER, Gym.GYM_PET, Gym.GYM_POC];
    return Gym;
}());
//# sourceMappingURL=W:/Code/sonkal/qr-code/src/app/gym.js.map