const game = document.getElementById('game');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');

let score = 0;
let time = 30;
let timerInterval;
let blockInterval;

function createBlock() {
    const block = document.createElement('div');
    block.classList.add('block');
    const x = Math.floor(Math.random() * (game.clientWidth - 50));
    const y = Math.floor(Math.random() * (game.clientHeight - 50));
    block.style.left = x + 'px';
    block.style.top = y + 'px';

    block.addEventListener('click', () => {
        score++;
        scoreEl.innerText = '分數: ' + score;
        game.removeChild(block);
    });

    game.appendChild(block);

    setTimeout(() => {
        if (game.contains(block)) game.removeChild(block);
    }, 2000);
}

function startGame() {
    score = 0;
    time = 30;
    scoreEl.innerText = '分數: 0';
    timerEl.innerText = '時間: 30';
    game.innerHTML = '';

    blockInterval = setInterval(createBlock, 800);

    timerInterval = setInterval(() => {
        time--;
        timerEl.innerText = '時間: ' + time;
        if (time <= 0) {
            clearInterval(timerInterval);
            clearInterval(blockInterval);
            alert('遊戲結束！你的分數: ' + score);
        }
    }, 1000);
}

startBtn.addEventListener('click', startGame);
