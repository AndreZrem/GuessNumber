const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let statusA = document.getElementById('statusA');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = { 
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.round() * this.max);
    }
}

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value)
{
    attempt.innerHTML = 'Tentativa: ' + value
}

function handleSubmit(e)
{
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick)
    {
        alert('Digite um valor valido!')
        return;
    }

    updateAttempt(attempt, ++Guess.attemptsNumber)

    if(numberDrawn == kick)
    {
        playAgain();
        statusA.innerHTML = 'parabéns você acertou';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#FFF';
        statusA.style.color = '#FFF';
        clear();
    }
    else if(numberDrawn > kick)
    {
        statusA.innerHTML = 'O número é maior'
        statusA.style.color = '#de4251';
        clear();
    }
    else if(numberDrawn < kick)
    {
        statusA.innerHTML = 'O número é menor'
        statusA.style.color = '#de4251';
        clear();
    }
}

function playAgain()
{
    document.getElementById('btnRestart').style.display = 'flex';
}

function restart()
{
    document.location.reload(true);
}

function clear()
{
    document.getElementById('kick').value = '';
}