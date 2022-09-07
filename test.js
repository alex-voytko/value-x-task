const randomValues = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = randomNum(0, 9);
  }
  return nums;
};
function randomNum(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Number(rand.toFixed(1));
}

console.log(randomValues([1, 2, 3, 4, 5]));
