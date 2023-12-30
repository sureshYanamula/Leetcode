function nextPermutation(nums) {
  let i = nums.length - 2;

  // Find the first element from the right that is smaller than its next element
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;

    // Find the first element from the right that is greater than nums[i]
    while (nums[j] <= nums[i]) {
      j--;
    }

    // Swap nums[i] and nums[j]
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Reverse the sub-array from i+1 to the end
  reverse(nums, i + 1);
}

function reverse(nums, start) {
  let end = nums.length - 1;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
