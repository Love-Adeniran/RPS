var scoreOfUser= 0;
var scoreOfComputer = 0;
var options = ["rock","scissors","paper"]

function rock(){
    var randomIndex = Math.floor(Math.random()*options.length)
    var choiceOfComputer = (options[randomIndex]) 
    var choiceOfUser = 'rock'
    if (choiceOfComputer =='paper'){
        disp.innerText = 'Computer chose Paper,You lose'
        scoreOfComputer++
        computerScore.innerText = scoreOfComputer
    }
    else if(choiceOfComputer == 'scissors'){
        disp.innerText = 'Computer chose scissors, You win!'
        scoreOfUser++
        userScore.innerText = scoreOfUser
    }
    else if (choiceOfComputer == 'rock'){
        disp.innerText = 'Computer chose Rock, Its a tie'
        
    }
}
function paper(){
    var randomIndex = Math.floor(Math.random()*options.length)
    var choiceOfComputer = (options[randomIndex])
    var choiceOfUser = 'paper'
    if (choiceOfComputer =='paper'){
        disp.innerText = 'Computer chose Paper,It is a tie!'
    }
    else if(choiceOfComputer == 'scissors'){
        disp.innerText = 'Computer chose scissors, You lose!'
        scoreOfComputer++
        computerScore.innerText = scoreOfComputer
    }
    else if (choiceOfComputer == 'rock'){
        disp.innerText = 'Computer chose Rock, You Win!'
        scoreOfUser++
        userScore.innerText = scoreOfUser
    }
}
function scissors(){
    var randomIndex = Math.floor(Math.random()*options.length)
    var choiceOfComputer = (options[randomIndex])
    var choiceOfUser = 'scissors'
    if (choiceOfComputer =='paper'){
        disp.innerText = 'Computer chose Paper,You Win!'
        scoreOfUser++
        userScore.innerText = scoreOfUser
    }
    else if(choiceOfComputer == 'scissors'){
        disp.innerText = 'Computer chose scissors, It is a Tie!'
    }
    else if (choiceOfComputer == 'rock'){
        disp.innerText = 'Computer chose Rock, You Lose!'
        scoreOfComputer++
        computerScore.innerText = scoreOfComputer
    }
}
function retart(){
    
}

