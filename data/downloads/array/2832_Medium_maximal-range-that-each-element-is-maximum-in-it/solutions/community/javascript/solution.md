# Javascript - MonoStack

**Author:** faustaleonardo
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/3964718/](https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/3964718/)

---

# Code
```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maximumLengthOfRanges = function (nums) {
  const n = nums.length;
  const ans = new Array(n).fill();
  const left = new Array(n).fill(1);
  const right = new Array(n).fill(1);
  let monoStack = [];

  for (let i = 0; i < n; i++) {
    while (
      monoStack.length &&
      nums[i] > nums[monoStack[monoStack.length - 1]]
    ) {
      const lastIdx = monoStack.pop();
      left[i] += left[lastIdx];
    }
    monoStack.push(i);
  }

  monoStack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (
      monoStack.length &&
      nums[i] > nums[monoStack[monoStack.length - 1]]
    ) {
      const lastIdx = monoStack.pop();
      right[i] += right[lastIdx];
    }
    monoStack.push(i);

    ans[i] = left[i] + right[i] - 1;
  }

  return ans;
};

```