// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let longestSeq = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSeq = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSeq++;
      }

      longestSeq = Math.max(longestSeq, currentSeq);
    }
  }

  return longestSeq;
}
