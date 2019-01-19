
var play = function (){
var gameMoney = document.getElementById("startingBet").value
var money = [parseInt(gameMoney)]
var moneyTotal= 0
var mostMoney = 0
var diceSum = 0
if (gameMoney == NaN || gameMoney <= 0) {
    alert("Please enter a bet greater than zero")
}
while(gameMoney > 0){
    var diceOne =   Math.floor(Math.random() * 6) + 1
    console.log(diceOne)
    var diceTwo = Math.floor(Math.random() * 6) + 1
    console.log(diceTwo)
    // for (j = 0; j < 1000; j++){
    // diceSum = Math.floor(Math.random * 6 + 1) + Math.floor(Math.random * 6 + 1)
   diceSum = diceOne + diceTwo
   console.log( "dice sum" + diceSum)
    if (diceSum == 7){
        // console.log(diceSum)
    gameMoney += 4;
    console.log(" game money:" + gameMoney)
} else {
    // console.log(diceSum)

    gameMoney--;
    console.log(" game money:" + gameMoney)
}
money.push(gameMoney)
console.log(money)
for (k = 0; k < money.length; k++){
    if (money[k] > mostMoney){
        mostMoney = money[k]
    }
}
console.log("Rolls at max money" + money.indexOf(mostMoney))
console.log("Total Rolls: " + (money.length - 1))
document.getElementById("startingBet").value = gameMoney
}
console.log("most" + mostMoney)
console.log(money)
if (gameMoney == 0){
    document.getElementById("resultsSection").style.display = "block";
    document.getElementById("startBet").value = "$" + money[0];
    document.getElementById("maxMoney").value = "$" + mostMoney;
    document.getElementById("rollsMax").value = money.indexOf(mostMoney)
}
}

var reset = function () {
    
}