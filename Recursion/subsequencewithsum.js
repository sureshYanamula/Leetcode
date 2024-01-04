function findSubsequencesWithSum(arr, targetSum) {
  const result = [];

  function generateSubsequenceWithSum(
    currentIndex,
    currentSubsequence,
    currentSum
  ) {
    if (currentIndex === arr.length) {
      if (currentSum === targetSum && currentSubsequence.length > 0) {
        result.push(currentSubsequence);
      }
      return;
    }

    // Include the current element in the subsequence
    generateSubsequenceWithSum(
      currentIndex + 1,
      currentSubsequence.concat(arr[currentIndex]),
      currentSum + arr[currentIndex]
    );

    // Exclude the current element from the subsequence
    generateSubsequenceWithSum(
      currentIndex + 1,
      currentSubsequence,
      currentSum
    );
  }

  generateSubsequenceWithSum(0, [], 0);

  return result;
}

const arr = [1, 2, 3, 4, 1];
const targetSum = 2;
const subsequencesWithSum = findSubsequencesWithSum(arr, targetSum);
console.log(
  `All subsequences of ${arr} with a sum of ${targetSum} are:`,
  subsequencesWithSum
);
