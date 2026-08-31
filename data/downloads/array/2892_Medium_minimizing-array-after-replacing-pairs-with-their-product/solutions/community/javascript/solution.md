# Javascript - Greedy - O(n) time + O(1) space

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimizing-array-after-replacing-pairs-with-their-product/solutions/4143671/](https://leetcode.com/problems/minimizing-array-after-replacing-pairs-with-their-product/solutions/4143671/)

---

# Code
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minArrayLength = function (nums, k) {
  let ans = nums.length;
  let count = 0;
  let curr = 1;

  for (const num of nums) {
    if (num === 0) return 1;

    curr *= num;
    if (curr > k) {
      ans -= Math.max(0, count - 1);
      curr = num;
      count = 0;
    }

    count++;
  }
  ans -= Math.max(0, count - 1);

  return ans;
};

```