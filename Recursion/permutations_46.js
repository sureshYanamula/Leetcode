function permute(nums) {
  const result = [];

  function backtrack(start) {
    if (start === nums.length - 1) {
      result.push(nums.slice());
      return;
    }

    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]]; // Backtrack to original state
    }
  }

  backtrack(0);

  return result;
}

// Example usage:
const nums = [1, 2, 3];
const allPermutations = permute(nums);
console.log("All permutations:", allPermutations);
