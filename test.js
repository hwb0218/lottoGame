const arr = [1, 2, 3, 4, 5];
const arr1 = [1, 2, 3, 10];

function checkNum() {
  let allFounded = arr.filter((num) => arr1.includes(num));
  console.log(allFounded);
}

checkNum();
