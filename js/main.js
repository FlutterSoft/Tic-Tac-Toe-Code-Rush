
let turn = 'o'
let board = [0,1,2,3,4,5,6,7,8]
let turnCount = 0
const winnerText = document.querySelector('h1')
const nextTurn = document.querySelector('h2')

const sq1 = document.querySelector('#square1')
const sq2 = document.querySelector('#square2')
const sq3 = document.querySelector('#square3')
const sq4 = document.querySelector('#square4')
const sq5 = document.querySelector('#square5')
const sq6 = document.querySelector('#square6')
const sq7 = document.querySelector('#square7')
const sq8 = document.querySelector('#square8')
const sq9 = document.querySelector('#square9')

const grid = [sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9]

sq1.addEventListener('click', function(){fillSquare(1)})
sq2.addEventListener('click', function(){fillSquare(2)})
sq3.addEventListener('click', function(){fillSquare(3)})
sq4.addEventListener('click', function(){fillSquare(4)})
sq5.addEventListener('click', function(){fillSquare(5)})
sq6.addEventListener('click', function(){fillSquare(6)})
sq7.addEventListener('click', function(){fillSquare(7)})
sq8.addEventListener('click', function(){fillSquare(8)})
sq9.addEventListener('click', function(){fillSquare(9)})

function fillSquare(sq){
    changeTurn()
    if (turn === 'x'){
        document.querySelector(`#square${sq}`).classList.toggle('fillX')
        board[sq-1] = 'x'
    }
    else if (turn === 'o'){
        document.querySelector(`#square${sq}`).classList.toggle('fillO')
        board[sq-1] = 'o'
    }
    check()
}
// check to see if game won 
function check(){
    if ((board[0] === board[1] && board[1] === board[2]) || 
        (board[3] === board[4] && board[4] === board[5]) ||
        (board[6] === board[7] && board[7] === board[8]) ||
        (board[0] === board[3] && board[3] === board[6]) ||
        (board[1] === board[4] && board[4] === board[7]) ||
        (board[2] === board[5] && board[5] === board[8]) ||
        (board[0] === board[4] && board[4] === board[8]) ||
        (board[2] === board[4] && board[4] === board[6])) {           
            winnerText.innerText = `${turn} wins!`
            nextTurn.innerText = ''
            disableAll()
        }

    if (turnCount == 9){
        winnerText.innerText = 'It\'s a draw!'
        nextTurn.innerText = ''
        
    }
    }
   
    

// change turn 
    function changeTurn(){
        nextTurn.innerText = `Next turn is ${turn}`
        turn == 'x' ? turn = 'o' : turn = 'x'
        turnCount++
    }

    // disables entire grid after victory
    function disableAll(){
        grid.forEach((s) => {
            s.classList.add('disable')
        })
    }