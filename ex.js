let secretNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number😍";
    document.querySelector(".number").textContent = secretNumber;
    if(score > highscore){
    highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = '#60b347'
  } else if (guess > secretNumber) {
    if (score >1) {
      document.querySelector(".message").textContent = "🐱‍🏍Too high";
      score--;
      document.querySelector('.score').textContent = score;
    }else{
        document.querySelector(".message").textContent = "🙂 You lost!";
        document.querySelector('.score').textContent = 0;
    }
  }else if (guess < secretNumber) {
    if (score >1) {
      document.querySelector(".message").textContent = "😣Too low";
      score--;
      document.querySelector('.score').textContent = score;
    }else{
        document.querySelector(".message").textContent = "🙂 You lost!";
        document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click',()=>{
    secretNumber = Number(Math.trunc(Math.random()*20)+1)
    document.querySelector('.number').textContent = secretNumber;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = ''
    document.querySelector(".number").textContent = '?';
})