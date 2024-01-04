function combinationSum2(candidates, target) {
  const result = [];

  candidates.sort((a, b) => a - b); // Sort the candidates to handle duplicates

  function backtrack(startIndex, currentCombination, currentSum) {
    if (currentSum === target) {
      result.push([...currentCombination]);
      return;
    }

    if (currentSum > target || startIndex === candidates.length) {
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue; // Skip duplicates to avoid duplicate combinations
      }

      currentCombination.push(candidates[i]);
      backtrack(i + 1, currentCombination, currentSum + candidates[i]);
      currentCombination.pop();
    }
  }

  backtrack(0, [], 0);

  return result;
}

// Example usage:
const candidates = [10, 1, 2, 7, 6, 1, 5];
const target = 8;
const combinations = combinationSum2(candidates, target);
console.log("Unique combinations:", combinations);
