const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('statusA');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attempsNumber: 0,
    nunberDrawn: function randowValue() {
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.nunberDrawn();

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Tentativa: ' + value;
};

function handleSubmit(e) {
  e.preventDefault();
  
  let kick = document.getElementById('kick').value;

  if(!kick)
  {
    alert('Nada digitado, por favor digite um numero valido!')
    return;
  };

  updateAttempt(attempt, ++Guess.attempsNumber);

  if(numberDrawn == kick)
  {
    playAgain();
    statusA.innerHTML = 'Parabéns você acertou!';
    result.style.transition = '0.4s'
    result.style.backgroundColor = '#37c978';
    result.style.color = '#FFF';
    statusA.style.color = '#FFF';
    clear();
  } else if(numberDrawn > kick)
  {
    statusA.innerHTML = 'O numero é maior!';
    statusA.style.color = '#de4251';
    clear();
  }else if(numberDrawn < kick)
  {
    statusA.innerHTML = 'O numero é menor!';
    statusA.style.color = '#de4251';
    clear();
  }

}

function playAgain() {
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = '';
}
