function rotate(nums, k) {
  k = k % nums.length; // Reduce k to the effective rotation value within array length

  // Reverse the entire array
  reverse(nums, 0, nums.length - 1);

  // Reverse the first k elements
  reverse(nums, 0, k - 1);

  // Reverse the remaining elements after k
  reverse(nums, k, nums.length - 1);
}

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}
