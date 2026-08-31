# 3-Line O(n) Javascript/Typescript Solution (only loops 2x)

**Author:** wentland
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/4327893/](https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/4327893/)

---

# Approach
For each `i`, sum all nums left of `i` and all nums right of `i`. 

`ans[i] = ((i * nums[i]) - sumLeft[i]) + (sumRight[i] - ((nums.length - i - 1) * nums[i]))`

The 3-Line answer below has been simplified (in math terms) to make it as short as possible, but it uses the above logic.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript
const getSumAbsoluteDifferences = (nums: number[]): number[] => {
  const sum = nums.reduce((a, b) => a + b);
  let l = 0;
  return nums.map((n, i) => sum + 2 * (i * n + n - (l += n)) - n * nums.length);
};

```