# 12 lines js solution faster than 100% js solutions

**Author:** iamawebgeek
**Votes:** 4
**Link:** [https://leetcode.com/problems/three-equal-parts/solutions/1343256/](https://leetcode.com/problems/three-equal-parts/solutions/1343256/)

---

First I found out how many ones are in the array. Then I checked if the array is dividable into 3 with the same amount of ones. Then I iterated from the end to find out the number. Once I had the number all I had to do is to validate if the sequence of first and second sets match.
```
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var threeEqualParts = function(arr) {
  const ones = arr.reduce((s, n) => s + n, 0);
  if (ones === 0) return [0, 2];
  if (ones % 3 !== 0) return [-1, -1];
  let onesToFind = ones / 3;
  let k = arr.length;
  while (onesToFind > 0) if (arr[--k] === 1) --onesToFind;
  const iter = arr.length - k;
  const firstOne = arr.indexOf(1);
  const secondOne = arr.indexOf(1, firstOne + iter);
  for (let i = 0; i < iter; i++)
    if (arr[i + firstOne] !== arr[k + i] || arr[i + secondOne] !== arr[k + i]) return [-1, -1];
  return [firstOne + iter - 1, secondOne + iter];
};
```