# _simple js monotonic stack

**Author:** rbutov
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/5863397/](https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/solutions/5863397/)

---

# Intuition
_monotonic stack

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var validSubarraySize = function (nums, threshold) {
  const n = nums.length;
  const stack = [];

  for (let i = 0; i <= n; i++) {
    const currentValue = (i < n) ? nums[i] : 0;

    while (stack.length > 0 && nums[stack[stack.length - 1]] > currentValue) {
      const min = nums[stack.pop()];
      const len = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

      if (min > threshold / len) {
        return len;
      }
    }

    stack.push(i);
  }

  return -1;
};
```