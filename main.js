let canv = document.getElementById('canvas')
let ctx = canv.getContext('2d') 

const buttonNewRound = document.querySelector('#new')
const buttonReset = document.querySelector('#reset')
let firstPlayerWins = document.querySelector('#firstPlayer')
let secondPlayerWins = document.querySelector('#secondPlayer')
let motion = document.querySelector('#motion')

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
let count = 0

function canvasCascade() {
  // VerticalLine
  ctx.fillStyle = "grey"
  ctx.fillRect(139, 0, 3, 420)
  ctx.fillStyle = "grey"
  ctx.fillRect(279, 0, 3, 420)
  // HorizontalLine
  ctx.fillStyle = "grey"
  ctx.fillRect(0, 139, 420, 3)
  ctx.fillStyle = "grey"
  ctx.fillRect(0, 279, 420, 3)
}
canvasCascade()

canv.addEventListener('click', canvasClick)
let clientX = 0
let clientY = 0

let player1 = 0
let player2 = 0

let gameStopper = false
let currentPlayer = 0
let winner = 'first' 

const playerFirstName = prompt('Введите имя первого игрока: ')
const playerSecondName = prompt('Введите имя второго игрока: ')

motion.textContent = `Ходит первый игрок - ${playerFirstName}`

function canvasClick(click) {
    clientX = click.offsetX;
    clientY = click.offsetY;
    playersMoveText()
  
    if (gameStopper == false) {
      if (clientX < 139 && clientY < 139 && board[0][0] != 'X' && board[0][0] != 'O') {
        if (currentPlayer % 2 == 0) {
          printTopLeftX()
          board[0][0] = 'X'
        } else {
          printTopLeftO()
          board[0][0] = 'O'
        }
        currentPlayer += 1
      }else if (clientX < 279 && clientY < 139 && clientX > 140 && clientY > 0 && board[0][1] != 'X' && board[0][1] != 'O') {
        if (currentPlayer % 2 == 0) {
          playersMoveText()
          printTopCenterX()
          board[0][1] = 'X'
        } else {
          playersMoveText()
          printTopCenterO()
          board[0][1] = 'O'
        }
        currentPlayer += 1
      }else if (clientX < 420 && clientY < 139 && clientX > 280 && clientY > 0 && board[0][2] != 'X' && board[0][2] != 'O') {
        if (currentPlayer % 2 == 0) {
          printTopRightX()
          board[0][2] = 'X'
        } else {
          printTopRightO()
          board[0][2] = 'O'
        }
        currentPlayer += 1
      }else if (clientX < 139 && clientY < 279 && clientX > 0 && clientY > 140 && board[1][0] != 'X' && board[1][0] != 'O') {
        if (currentPlayer % 2 == 0) {
          printCenterLeftX()
          board[1][0] = 'X'
        } else {
          printCenterLeftO()
          board[1][0] = 'O'
        }
        currentPlayer += 1
      }else if (clientX < 279 && clientY < 279 && clientX > 140 && clientY > 140 && board[1][1] != 'X' && board[1][1] != 'O') {
        if (currentPlayer % 2 == 0) {
          printCenterCenterX()
          board[1][1] = 'X'
        } else {
          printCenterCenterO()
          board[1][1] = 'O'
        }
        currentPlayer += 1
      }else if (clientX < 420 && clientY < 279 && clientX > 280 && clientY > 140 && board[1][2] != 'X' && board[1][2] != 'O') {
        if (currentPlayer % 2 == 0) {
          printCenterRightX()
          board[1][2] = 'X'
        } else {
          printCenterRightO()
          board[1][2] = 'O'
        }
        currentPlayer += 1
      }else if (clientX < 139 && clientY < 420 && clientX > 0 && clientY > 280 && board[2][0] != 'X' && board[2][0] != 'O') {
        if (currentPlayer % 2 == 0) {
          printBottomLeftX()
          board[2][0] = 'X'
        } else {
          printBottomLeftO()
          board[2][0] = 'O'
        }
        currentPlayer += 1
      }else if (clientX < 279 && clientY < 420 && clientX > 140 && clientY > 280 && board[2][1] != 'X' && board[2][1] != 'O') {
        if (currentPlayer % 2 == 0) {
          printBottomCenterX()
          board[2][1] = 'X'
        } else {
          printBottomCenterO()
          board[2][1] = 'O'
        }
        currentPlayer += 1
      }else if (clientX < 420 && clientY < 420 && clientX > 280 && clientY > 280 && board[2][2] != 'X' && board[2][2] != 'O') {
        if (currentPlayer % 2 == 0) {
          printBottomRightX()
          board[2][2] = 'X'
        } else {
          printBottomRightO()
          board[2][2] = 'O'
        }
        currentPlayer += 1
      }else {
        alert('Это поле уже занято, выберите путое поле!')
      }
      ifWin()
    }

    draw()
}
// If Win
function ifWin() {
  // Diagonal First
  if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) { 
    if (board[0][0] == 'X') {
      if (winner == 'first') {
        player1 += 1
        firstPlayerWinsFunc()
      } else if (winner == 'second') {
        player2 += 1
        secondPlayerWinsFunc()
      }
      gameStopper = true
    }else if (board[0][0] == 'O') {
      if (winner == 'first') {
        player2 += 1
        secondPlayerWinsFunc()
      } else if (winner == 'second') {
        player1 += 1
        firstPlayerWinsFunc()
      }
      gameStopper = true
    }
  // Horizontal First
  }else if (board[0][0] == board[0][1] && board[0][2] == board[0][1]) {
    if (board[0][0] == 'X') {
      if (winner == 'first') {
        player1 += 1
        firstPlayerWinsFunc()
      } else if (winner == 'second') {
        player2 += 1
        secondPlayerWinsFunc()
      }
      gameStopper = true
    } else if (board[0][0] == 'O') {
      if (winner == 'first') {
        player2 += 1
        secondPlayerWinsFunc()
      } else if (winner == 'second') {
        player1 += 1
        firstPlayerWinsFunc()
      }
      gameStopper = true
    }
  // Horizontal Second
  }else if (board[1][0] == board[1][1] && board[1][2] == board[1][1]) {
    if (board[1][0] == 'X') {
      if (winner == 'first') {
        player1 += 1
        firstPlayerWinsFunc()
      } else if (winner == 'second') {
        player2 += 1
        secondPlayerWinsFunc()
      }
      gameStopper = true
    } else if (board[1][0] == 'O') {
      if (winner == 'first') {
        player2 += 1
        secondPlayerWinsFunc()
      } else if (winner == 'second') {
        player1 += 1
        firstPlayerWinsFunc()
      }
      gameStopper = true
    }
  // Horizontal Third
  }else if (board[2][0] == board[2][1] && board[2][2] == board[2][1]) {
    if (board[2][0] == 'X') {
      if (winner == 'first') {
        player1 += 1
        firstPlayerWinsFunc()
      } else if (winner == 'second') {
        player2 += 1
        secondPlayerWinsFunc()
      }
      gameStopper = true
    } else if (board[2][0] == 'O') {
      if (winner == 'first') {
        player2 += 1
        secondPlayerWinsFunc()
      } else if (winner == 'second') {
        player1 += 1
        firstPlayerWinsFunc()
      }
      gameStopper = true
    }
  // Diagonal Second
  }else if (board[0][2] == board[1][1] && board[2][0] == board[1][1]) {
    if (board[0][2] == 'X') {
      if (winner == 'first') {
        player1 += 1
        firstPlayerWinsFunc()
      } else if (winner == 'second') {
        player2 += 1
        secondPlayerWinsFunc()
      }
      gameStopper = true
    } else if (board[0][2] == 'O') {
      if (winner == 'first') {
        player2 += 1
        secondPlayerWinsFunc()
      } else if (winner == 'second') {
        player1 += 1
        firstPlayerWinsFunc()
      }
      gameStopper = true
    }
  // Vertical First
  }else if (board[0][0] == board[1][0] && board[2][0] == board[1][0]) {
    if (board[0][0] == 'X') {
      if (winner == 'first') {
        player1 += 1
        firstPlayerWinsFunc()
      } else if (winner == 'second') {
        player2 += 1
        secondPlayerWinsFunc()
      }
      gameStopper = true
    } else if (board[0][0] == 'O') {
      if (winner == 'first') {
        player2 += 1
        secondPlayerWinsFunc()
      } else if (winner == 'second') {
        player1 += 1
        firstPlayerWinsFunc()
      }
      gameStopper = true
    }
  // Vertical Second
  }else if (board[0][1] == board[1][1] && board[2][1] == board[1][1]) {
    if (board[0][1] == 'X') {
      if (winner == 'first') {
        player1 += 1
        firstPlayerWinsFunc()
      } else if (winner == 'second') {
        player2 += 1
        secondPlayerWinsFunc()
      }
      gameStopper = true
    } else if (board[0][1] == 'O') {
      if (winner == 'first') {
        player2 += 1
        secondPlayerWinsFunc()
      } else if (winner == 'second') {
        player1 += 1
        firstPlayerWinsFunc()
      }
      gameStopper = true
    }
  // Vertical Third
  }else if (board[0][2] == board[1][2] && board[2][2] == board[1][2]) {
    if (board[0][2] == 'X') {
      if (winner == 'first') {
        player1 += 1
        firstPlayerWinsFunc()
      } else if (winner == 'second') {
        player2 += 1
        secondPlayerWinsFunc()
      }
      gameStopper = true
    } else if (board[0][2] == 'O') {
      if (winner == 'first') {
        player2 += 1
        secondPlayerWinsFunc()
      } else if (winner == 'second') {
        player1 += 1
        firstPlayerWinsFunc()
      }
      gameStopper = true
    }
  }
}
// Draw
function draw() {
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (board[i][j] == '') {
        count += 1
      } 
    }
  }
  if (count == 0) {
    alert('Ничья! Нажмите кнопку "Новый раунд", чтобы продолжить играть, или "Сброс", чтобы начать новую игру')
  }
  console.log(count)
  count = 0
}

// Player's Move Text
function playersMoveText() {
  if (winner == 'first') {
    if (currentPlayer % 2 == 1) {
      motion.textContent = `Ходит первый игрок - ${playerFirstName}`
    } else if (currentPlayer % 2 == 0) {
      motion.textContent = `Ходит второй игрок - ${playerSecondName}`
    }
  } else if (winner == 'second') {
    if (currentPlayer % 2 == 0) {
      motion.textContent = `Ходит первый игрок - ${playerFirstName}`
    } else if (currentPlayer % 2 == 1) {
      motion.textContent = `Ходит второй игрок - ${playerSecondName}`
    }
  }
}

// FirstPlayerWins
function firstPlayerWinsFunc() {
  winner = 'first'
  count = 0
  firstPlayerWins.textContent = `Побед у первого игрока: ${player1}`
  motion.textContent = `Ходит первый игрок - ${playerFirstName}`
  let result = document.getElementById('result');
  result.innerHTML = "<h3 class='col-12 text-center p-3 mb-2 bg-light text-success' id='gamer'></h3>";
  let gamer = document.getElementById('gamer');
  gamer.innerHTML = 'Первый игрок выиграл, чтобы начать новый раунд, нажмите кнопку "Новый раунд".'
}
// SecondPlayerWins
function secondPlayerWinsFunc() {
  winner = 'second'
  count = 0
  secondPlayerWins.textContent = `Побед у второго игрока: ${player2}`
  motion.textContent = `Ходит второй игрок - ${playerSecondName}`
  let result = document.getElementById('result');
  result.innerHTML = "<h3 class='col-12 text-center p-3 mb-2 bg-light text-success' id='gamer'></h3>";
  let gamer = document.getElementById('gamer');
  gamer.innerHTML = 'Второй игрок выиграл, чтобы начать новый раунд, нажмите кнопку "Новый раунд".'
}

// Button New Round
buttonNewRound.addEventListener('click', () => {
  ctx.clearRect(0, 0, 420, 420)
  canvasCascade()
  result.innerHTML = "";
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  currentPlayer = 0
  count = 0
  gameStopper = false
}) 
// Button Reset
buttonReset.addEventListener('click', () => {
  ctx.clearRect(0, 0, 420, 420)
  canvasCascade()
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  currentPlayer = 0
  count = 0
  winner = 'first'
  gameStopper = false
  player1 = 0
  player2 = 0
  motion.textContent = `Ходит первый игрок - ${playerFirstName}`
  firstPlayerWins.textContent = `Первый игрок: ${player1}`
  secondPlayerWins.textContent = `Второй игрок: ${player2}`
  result.innerHTML = "";
})



// X FUNCTIONS
// Top
function printTopLeftX() {
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(20, 20)
  ctx.lineTo(120, 120)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(120, 20)
  ctx.lineTo(20, 120)
  ctx.stroke()
}
function printTopCenterX() {
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(160, 20)
  ctx.lineTo(260, 120)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(260, 20)
  ctx.lineTo(160, 120)
  ctx.stroke()
}
function printTopRightX() {
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(300, 20)
  ctx.lineTo(400, 120)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(400, 20)
  ctx.lineTo(300, 120)
  ctx.stroke()
}
// Center
function printCenterLeftX() {
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(20, 160)
  ctx.lineTo(120, 260)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(120, 160)
  ctx.lineTo(20, 260)
  ctx.stroke()
}
function printCenterCenterX() {
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(160, 160)
  ctx.lineTo(260, 260)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(260, 160)
  ctx.lineTo(160, 260)
  ctx.stroke()
}
function printCenterRightX() {
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(300, 160)
  ctx.lineTo(400, 260)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(400, 160)
  ctx.lineTo(300, 260)
  ctx.stroke()
}
// Bottom
function printBottomLeftX() {
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(20, 300)
  ctx.lineTo(120, 400)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(120, 300)
  ctx.lineTo(20, 400)
  ctx.stroke()
}
function printBottomCenterX() {
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(160, 300)
  ctx.lineTo(260, 400)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(260, 300)
  ctx.lineTo(160, 400)
  ctx.stroke()
}
function printBottomRightX() {
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(300, 300)
  ctx.lineTo(400, 400)
  ctx.stroke()
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.moveTo(400, 300)
  ctx.lineTo(300, 400)
  ctx.stroke()
}

// O FUNCTIONS
// Top
function printTopLeftO() {
  ctx.beginPath()
  ctx.arc(70, 70, 55, 0, 360)
  ctx.stroke()
}
function printTopCenterO() {
  ctx.beginPath()
  ctx.arc(210, 70, 55, 0, 360)
  ctx.stroke()
}
function printTopRightO() {
  ctx.beginPath()
  ctx.arc(350, 70, 55, 0, 360)
  ctx.stroke()
}
// Center
function printCenterLeftO() {
  ctx.beginPath()
  ctx.arc(70, 210, 55, 0, 360)
  ctx.stroke()
}
function printCenterCenterO() {
  ctx.beginPath()
  ctx.arc(210, 210, 55, 0, 360)
  ctx.stroke()
}
function printCenterRightO() {
  ctx.beginPath()
  ctx.arc(350, 210, 55, 0, 360)
  ctx.stroke()
}
// Bottom
function printBottomLeftO() {
  ctx.beginPath()
  ctx.arc(70, 350, 55, 0, 360)
  ctx.stroke()
}
function printBottomCenterO() {
  ctx.beginPath()
  ctx.arc(210, 350, 55, 0, 360)
  ctx.stroke()
}
function printBottomRightO() {
  ctx.beginPath()
  ctx.arc(350, 350, 55, 0, 360)
  ctx.stroke()
}