function subsets(nums) {
  const result = [];

  function generateSubsets(index, currentSubset) {
    result.push(currentSubset.slice()); // Add the current subset to the result

    for (let i = index; i < nums.length; i++) {
      currentSubset.push(nums[i]); // Include the current element in the subset
      generateSubsets(i + 1, currentSubset); // Recursively generate subsets with next elements
      currentSubset.pop(); // Exclude the current element to backtrack
    }
  }

  generateSubsets(0, []);

  return result;
}

// Example usage:
const nums = [1, 2, 3];
const allSubsets = subsets(nums);
console.log("All subsets:", allSubsets);
