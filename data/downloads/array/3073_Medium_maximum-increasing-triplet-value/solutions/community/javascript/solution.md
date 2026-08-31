# Javascript - MonoStack + Sort

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/4856528/](https://leetcode.com/problems/maximum-increasing-triplet-value/solutions/4856528/)

---

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  const n = nums.length;
  let curr = -Infinity;
  const rightMax = new Array(n).fill(-Infinity);
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] >= curr) {
      curr = nums[i];
    } else {
      rightMax[i] = curr;
    }
  }

  let ans = 0;
  const monoStack = [];
  const sortedIndices = [...Array(n).keys()].sort(
    (a, b) => nums[a] - nums[b] || b - a
  );
  for (const idx of sortedIndices) {
    while (monoStack.length && idx < monoStack.at(-1)) monoStack.pop();

    if (monoStack.length && rightMax[idx] >= 0) {
      ans = Math.max(ans, nums[monoStack.at(-1)] - nums[idx] + rightMax[idx]);
    }
    monoStack.push(idx);
  }

  return ans;
};

```