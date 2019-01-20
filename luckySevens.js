
var play = function (){
document.getElementById("jumbo").style.display = "none";
var gameMoney = parseFloat(document.getElementById("startingBet").value)
var money = [gameMoney]
var mostMoney = 0
var diceSum = 0
if (gameMoney == NaN || gameMoney <= 0) {
    alert("Please enter a bet greater than zero")
    return false;
}
while(gameMoney > 0){
    var diceOne =   Math.floor(Math.random() * 6) + 1
    var diceTwo = Math.floor(Math.random() * 6) + 1
   diceSum = diceOne + diceTwo
    if (diceSum == 7){
    gameMoney += 4;
} else {
    gameMoney--;
}
money.push(gameMoney)
for (k = 0; k < money.length; k++){
    if (money[k] > mostMoney){
        mostMoney = money[k]
    }
}
document.getElementById("startingBet").value = gameMoney
}

if (gameMoney <= 0){
    document.getElementById("resultsSection").style.display = "block";
    document.getElementById("startBet").value = "$" + money[0];
    document.getElementById("totalRolls").value = money.length -1;
    document.getElementById("maxMoney").value = "$" + mostMoney;
    document.getElementById("rollsMax").value = money.indexOf(mostMoney)

}

}

var reset = function () {
    var money = [];
    document.getElementById("startingBet").value = "0.00"
    document.getElementById("resultsSection").style.display = "none";
    document.getElementById("startBet").value = 0;
    document.getElementById("maxMoney").value = 0;
    document.getElementById("rollsMax").value = 0;
    document.getElementById("jumbo").style.display = "block";
}