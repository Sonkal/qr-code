export var Season = (function () {
    function Season(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    Season.CURRENT_SEASON = function () {
        var month = new Date().getMonth() + 1;
        var matchingS = Season.SEASONS.filter(function (s) { return s.month >= month; });
        if (matchingS.length > 0)
            return matchingS[0];
        return Season.SEASON_1;
    };
    Season.prototype.amount = function () {
        var date = new Date();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        if (month <= this.month && day < 16)
            return 1100;
        return 1300;
    };
    Season.SEASON_1 = new Season({ label: 'Leden - Březen', code: 1, month: 1 });
    Season.SEASON_2 = new Season({ label: 'Duben - Červen', code: 2, month: 4 });
    Season.SEASON_3 = new Season({ label: 'Září - Prosinec', code: 3, month: 9 });
    Season.SEASONS = [Season.SEASON_1, Season.SEASON_2, Season.SEASON_3];
    return Season;
}());
//# sourceMappingURL=W:/Code/sonkal/qr-code/src/app/season.js.map