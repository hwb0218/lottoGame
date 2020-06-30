let resultValue = document.querySelector(".resultValue");
const bonusBox = document.querySelector(".bonusBox");
const bonusBall = document.createElement("div");

let myNumber = [];
const bonusNumber = myNumber;

let mapping = Array(45)
  .fill()
  .map((value, index) => index + 1);
let shuffle = [];
while (mapping.length > 0) {
  let value = mapping.splice(Math.floor(Math.random() * mapping.length), 1)[0];
  shuffle.push(String(value));
}

let bonus = shuffle[shuffle.length - 1];

let prize = shuffle.slice(0, 6).sort((a, b) => a - b);
function rank(list) {
  const length = list.length;
  if (length === 3) {
    console.log("5등!");
  } else if (length === 4) {
    console.log("4등!");
  } else if (length === 5) {
    console.log("3등!");
  } else if (length === 5 && bonus === bonusNumber) {
    console.log("2등!");
  } else if (length === 6) {
    console.log("1등!");
  } else if (length === 1) {
    console.log("1개");
  } else if (length === 2) {
    console.log("2개");
  } else {
    console.log("0개 다음 기회에..");
  }
}

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
  }, i * 1000);
}

setTimeout(() => {
  bonusBall.classList.add("result");
  bonusBall.textContent = bonus;
  bonusBox.appendChild(bonusBall);
  color(bonus, bonusBall);
}, 6000);

axios
  .get("/winner-numbers")
  .then((res) => {
    let data = res.data;
    return data;
  })
  .then((data) => {
    const checkValue = data.filter((num) => prize.includes(num));
    myNumber = checkValue;
    console.log("나의 숫자 " + prize);
    console.log("당첨 숫자 " + myNumber);
    rank(myNumber);
  });
