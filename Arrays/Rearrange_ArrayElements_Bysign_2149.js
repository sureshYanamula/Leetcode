function rearrangeArray(nums) {
  const result = [];
  let posIndex = 0;
  let negIndex = 1;

  for (const num of nums) {
    if (num >= 0) {
      result[posIndex] = num;
      posIndex += 2;
    } else {
      result[negIndex] = num;
      negIndex += 2;
    }
  }

  return result;
}
