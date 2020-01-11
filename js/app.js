"use strict";
function startGame() {
    //starting a new game
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    placeAlert('name');
    postScore(100, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = 'MultiMath player'; }
    console.log("New game starting for player: **" + name + "** ");
}
function getInputValue(elementId) {
    var inputElement = document.getElementById(elementId);
    if (inputElement.value === '') {
        return undefined;
    }
    else
        return inputElement.value;
}
function postScore(score, playerName) {
    var scoreElement = document.getElementById('postedScore');
    scoreElement.innerText = score + " - " + playerName;
}
document.getElementById('startGame').addEventListener('click', startGame);
function getPlayerName(id) {
    var inputName = document.getElementById(id);
    if (inputName.value === '') {
        return "No name was provided";
    }
    else
        return inputName.value;
}
function placeAlert(alert) {
    var name = getPlayerName('playername');
    (document.getElementById(alert)).innerText = "YES!!!  this is my name " + name;
}
//# sourceMappingURL=app.js.map