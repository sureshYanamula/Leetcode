function findLeaders(nums) {
  const leaders = [];
  let maxRight = nums[nums.length - 1];

  // The last element is always a leader
  leaders.push(maxRight);

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] > maxRight) {
      maxRight = nums[i];
      leaders.unshift(maxRight);
    }
  }

  return leaders;
}
