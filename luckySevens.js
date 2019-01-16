
var play = function play(){
var gameMoney = document.getElementById("startingBet").value
var diceOne = Math.floor(Math.random * 6 + 1)
var diceTwo = Math.floor(Math.random * 6 + 1)
var diceRolled = []
var diceSum = 0
var money = []
var moneyTotal= 0
if (gameMoney == NaN || gameMoney <= 0){
    alert ("Please enter a bet that is greater than zero")
} else if (gameMoney >0){
    console.log(gameMoney)
    diceRolled.push(diceOne);
    diceRolled.push(diceTwo);
    diceSum = diceRolled[0] + diceRolled[1]
    if (diceSum == 7){
        gameMoney += 4
    } else { gameMoney -=1
    }
    money.push([gameMoney, diceRolled.length/2])
} else if ( gameMoney <= 0){
    alert("gameOver");
    document.getElementById("resultsSection").style("display:block")
}
}

