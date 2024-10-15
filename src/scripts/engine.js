//views - alteram algo visual
//values - calculos que rodam de fundo

const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),  //quando é id se usa #
        score: document.querySelector("#score"),
    },
    values: {
        timerId: null,
        gameVelocity: 1000
    },
};

function randomSquare(){
    state.view.squares.forEach((square) =>{
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
}

function moveEnemy(){
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity)
}

function addListenerHitBox(){
    state.view.squares.forEach((square) => {
    })
}


function init() {  //funcao de inicio, muitos utlizam main tbm
    moveEnemy();
}

init();