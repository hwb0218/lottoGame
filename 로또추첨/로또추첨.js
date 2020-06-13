let resultValue = document.querySelector(".resultValue");
const bonusBox = document.querySelector(".bonusBox");
const bonusBall = document.createElement("div");

let mapping = Array(45)
  .fill()
  .map((value, index) => index + 1);
console.log(mapping);

let shuffle = [];
while (mapping.length > 0) {
  let value = mapping.splice(Math.floor(Math.random() * mapping.length), 1)[0];
  shuffle.push(value);
}
console.log(shuffle);

let bonus = shuffle[shuffle.length - 1];

let prize = shuffle.slice(0, 6).sort((a, b) => a - b);

console.log(prize, bonus);

function color(number, ball) {
  if (number <= 10) {
    ball.classList.add("red");
  } else if (number <= 20) {
    ball.classList.add("orange");
  } else if (number <= 30) {
    ball.classList.add("yellow");
  } else if (number <= 40) {
    ball.classList.add("blue");
  } else {
    ball.classList.add("green");
  }
}

for (let i = 0; i < prize.length; i++) {
  setTimeout(() => {
    let ball = document.createElement("div");
    ball.classList.add("result");
    ball.textContent = prize[i];
    resultValue.appendChild(ball);
    color(prize[i], ball);
  }, 1000);
}

setTimeout(() => {
  bonusBall.classList.add("result");
  bonusBall.textContent = bonus;
  bonusBox.appendChild(bonusBall);
  color(bonus, bonusBall);
}, 2000);

//psuh
