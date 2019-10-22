window.onload = function(){
    this.gameBoard()
    document.getElementsByClassName("btn")[0].onclick = function(){
        for(let a = 0; a < squares.length; a++){
            squares[a].innerHTML = ("")
    }
    document.getElementById("status").classList.remove("you-won")
    document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O."
}
}
function gameBoard(){
    squares = document.querySelectorAll('#board div');    
    for(let a = 0; a < squares.length; a++){
        squares[a].classList.add("square")
        squares[a].onmouseover = function(){
            squares[a].classList.toggle("hover",true)
        }
        squares[a].onmouseout = function(){
            squares[a].classList.toggle("hover",false)
        }
        squares[a].onclick = function(){
            if (squares[a].innerHTML === ""){
                squares[a].innerHTML = "X"
                gameCheck(squares)
            }
            else if(squares[a].innerHTML === "O"){
                squares[a].classList.toggle("O",false)
                squares[a].innerHTML = "X"
                squares[a].classList.toggle("X",true)
                gameCheck(squares)
            }
            else if(squares[a].innerHTML === "X"){
                squares[a].classList.toggle("X",false)
                squares[a].innerHTML = "O"
                squares[a].classList.toggle("O",true)
                gameCheck(squares)
            }
        
        }
        
    }
}
function gameCheck(sqr) {
    if (sqr[0].innerHTML !== "" && (sqr[0].innerHTML === sqr[1].innerHTML && (sqr[0].innerHTML === sqr[2].innerHTML))){
        winMsg(sqr[0])
        axa()
     }
     else if (sqr[3].innerHTML !== "" && (sqr[3].innerHTML === sqr[4].innerHTML && (sqr[3].innerHTML === sqr[5].innerHTML))){
        winMsg(sqr[3])
        axa()
     }
     else if (sqr[6].innerHTML !== "" && (sqr[6].innerHTML === sqr[7].innerHTML && (sqr[6].innerHTML === sqr[8].innerHTML))){
        winMsg(sqr[6])
        axa()
     }
     else if (sqr[2].innerHTML !== "" && (sqr[2].innerHTML === sqr[5].innerHTML && (sqr[2].innerHTML === sqr[8].innerHTML))){
        winMsg(sqr[2])
        axa()
     }
     else if (sqr[6].innerHTML !== "" && (sqr[6].innerHTML === sqr[4].innerHTML && (sqr[6].innerHTML === sqr[2].innerHTML))){
        winMsg(sqr[6])
        axa()
     }
     else if (sqr[1].innerHTML !== "" && (sqr[1].innerHTML === sqr[4].innerHTML && (sqr[1].innerHTML === sqr[7].innerHTML))){
        winMsg(sqr[1])
        axa()
     }
     else if (sqr[0].innerHTML !== "" && (sqr[0].innerHTML === sqr[4].innerHTML && (sqr[0].innerHTML === sqr[8].innerHTML))){
        winMsg(sqr[0])
        axa()
     }
     else if (sqr[0].innerHTML !== "" && (sqr[0].innerHTML === sqr[3].innerHTML && (sqr[0].innerHTML === sqr[6].innerHTML))){
        winMsg(sqr[0])
        axa()
     }
}
function winMsg(winner){
    document.getElementById('status').className = "you-won"
    document.getElementById('status').innerHTML = "Congratulations! "+ winner.innerHTML + " is the Winner!"
}
function axa(){
    for(let i = 0; i < squares.length;i++){
        squares[i].onclick = void(0)
    }
}
