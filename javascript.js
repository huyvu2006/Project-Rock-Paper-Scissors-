function getComputerChoice() {
    let X = Math.floor(Math.random()*3 +1);
    let ketQua ;
    if (X == 1) {
         ketQua = "Keo" ;
    }
    else if (X == 2) {
        ketQua ="Bua";
    }
    else ketQua = "Bao";

    return ketQua;
}
function getHumanChoice () {
    X = prompt("Nhap Keo bua bao","").toLowerCase()
    let ketQua ;
    if (X == "keo") {
         ketQua = "Keo" ;
    }
    else if (X == "bua") {
        ketQua ="Bua";
    }
    else ketQua = "Bao";

    return ketQua;
}



function playGame() {
let humanScore = 0;
let computerScore = 0;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
console.log("tro choi bat dau")

function playRound (humanChoice,computerChoice) {
    humanSelection = getComputerChoice();
    computerSelection = getHumanChoice();
   
    if (humanChoice == "Keo" && computerChoice == "Bao") {
        ketQua ="Ban thang keo thang bao";
        humanScore++
    }
    else if (humanChoice == "Bua" && computerChoice == "Keo") {
        ketQua ="Ban thang bua thang keo";
        humanScore++
    }
    else if (humanChoice == "Bao" && computerChoice == "Bua") {
        ketQua ="Ban thang bao thang bua";
        humanScore++
    }
    else if (humanChoice == computerChoice) {
        ketQua ="Hoa nhau";
    }
    else {
        ketQua ="Ban thua";
        computerScore++
    }
   return console.log(humanChoice),
   console.log(computerChoice),
   console.log(ketQua);
}

playRound(humanSelection,computerSelection)
playRound(humanSelection,computerSelection)
playRound(humanSelection,computerSelection)
playRound(humanSelection,computerSelection)
playRound(humanSelection,computerSelection)


return console.log(`diem cua ban ${humanScore}`),
       console.log(`diem cua may ${computerScore}`),
       console.log(`nguoi chien thang la ${humanScore > computerScore ? 'ban' : humanScore == computerScore ? 'hoa nhau' : 'may'}`);
}

playGame()