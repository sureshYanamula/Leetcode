function countSubsequencesWithSum(arr, targetSum) {
  let count = 0;

  function generateSubsequenceWithSum(left, right, currentSum) {
    if (left > right) {
      if (currentSum === targetSum) {
        count++;
      }
      return;
    }

    // Include the element at the left pointer in the subsequence
    generateSubsequenceWithSum(left + 1, right, currentSum + arr[left]);

    // Move the left pointer without including the element
    generateSubsequenceWithSum(left + 1, right, currentSum);
  }

  generateSubsequenceWithSum(0, arr.length - 1, 0);

  return count;
}

const arr = [1, 2, 3, 4, 5];
const targetSum = 5;
const occurrences = countSubsequencesWithSum(arr, targetSum);
console.log(
  `The sum ${targetSum} occurred ${occurrences} times among subsequences of ${arr}.`
);
