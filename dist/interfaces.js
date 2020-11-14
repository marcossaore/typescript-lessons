"use strict";
var tlou = {
    title: "The last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A plague tale, Metro");
    }
};
console.log(tlou.title);
console.log(tlou.genre);
// tlou.genre = "horror";
// type guard
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
var leftBehind = {
    title: "The last of Us - Left Behind",
    description: "you play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story"]
};
console.log(leftBehind);
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
