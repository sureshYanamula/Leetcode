function combinationSum(candidates, target) {
  const result = [];

  function backtrack(startIndex, currentCombination, currentSum) {
    if (currentSum === target) {
      result.push([...currentCombination]);
      return;
    }

    if (currentSum > target || startIndex === candidates.length) {
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      currentCombination.push(candidates[i]);
      backtrack(i, currentCombination, currentSum + candidates[i]);
      currentCombination.pop();
    }
  }

  backtrack(0, [], 0);

  return result;
}

// Example usage:
const candidates = [2, 3, 6, 7];
const target = 7;
const combinations = combinationSum(candidates, target);
console.log("Unique combinations:", combinations);
