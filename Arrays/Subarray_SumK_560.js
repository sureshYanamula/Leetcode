function maxSubArrayLen(nums, k) {
  const sumIndices = {};
  let maxLength = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === k) {
      maxLength = i + 1;
    } else if (sumIndices.hasOwnProperty(sum - k)) {
      maxLength = Math.max(maxLength, i - sumIndices[sum - k]);
    }

    if (!sumIndices.hasOwnProperty(sum)) {
      sumIndices[sum] = i;
    }
  }

  return maxLength;
}
