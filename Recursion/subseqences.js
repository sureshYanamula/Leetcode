function findSubsequences(arr) {
  const result = [];

  function generateSubsequence(currentIndex, currentSubsequence) {
    if (currentIndex === arr.length) {
      if (currentSubsequence.length > 0) {
        result.push(currentSubsequence);
      }
      return;
    }

    // Include the current element in the subsequence
    generateSubsequence(
      currentIndex + 1,
      currentSubsequence.concat(arr[currentIndex])
    );

    // Exclude the current element from the subsequence
    generateSubsequence(currentIndex + 1, currentSubsequence);
  }

  generateSubsequence(0, []);

  return result;
}

const arr = [1, 2, 3];
const subsequences = findSubsequences(arr);
console.log("All subsequences of", arr, "are:", subsequences);
