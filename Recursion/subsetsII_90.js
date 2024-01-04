function subsetsWithDup(nums) {
  const result = [];

  nums.sort((a, b) => a - b); // Sort the array to handle duplicates

  function backtrack(startIndex, currentSubset) {
    result.push(currentSubset.slice()); // Add the current subset to the result

    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue; // Skip duplicates to avoid duplicate subsets
      }

      currentSubset.push(nums[i]); // Include the current element in the subset
      backtrack(i + 1, currentSubset); // Recursively generate subsets with next elements
      currentSubset.pop(); // Exclude the current element to backtrack
    }
  }

  backtrack(0, []);

  return result;
}

// Example usage:
const nums = [1, 2, 2];
const allSubsets = subsetsWithDup(nums);
console.log("All subsets without duplicates:", allSubsets);
