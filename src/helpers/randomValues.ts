export const randomValues = (nums: number[]): number[] => {
  const randomNums = [];
  for (let i = 0; i < nums.length; i++) {
    randomNums.push(randomNum(0, 9));
  }
  return randomNums;
};
function randomNum(min: number, max: number): number {
  let rand = min + Math.random() * (max + 1 - min);
  return Number(rand.toFixed(1));
}
