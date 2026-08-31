# Javascript - Binary Search

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-equal-numbers-blocks/solutions/4292584/](https://leetcode.com/problems/number-of-equal-numbers-blocks/solutions/4292584/)

---

# Code
```
/**
 * Definition for BigArray.
 * class BigArray {
 *     @param {number[]} elements
 *     constructor(elements);
 *
 *     @param {number} index
 *     @return {number}
 *     at(index);
 *
 *     @return {number}
 *     size();
 * }
 */
/**
 * @param {BigArray} nums
 * @return {number}
 */
var countBlocks = function (nums) {
  let ans = 0;
  let i = 0;
  const n = nums.size();

  while (i < n) {
    const idx = binarySearch(i, n - 1, nums);
    ans++;
    i = idx + 1;
  }

  return ans;
};

function binarySearch(low, high, nums) {
  let idx = null;
  const target = nums.at(low);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums.at(mid) === target) {
      idx = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return idx;
}

```