export const calculatePercent = (nums: number[]): number[] => {
  const maxVal = nums.reduce((acc, cur) => acc + cur, 0);
  const percents = [];
  for (let i = 0; i < nums.length; i++) {
    percents.push(Number(((nums[i] / maxVal) * 100).toFixed(1)));
  }
  return percents;
};
