# O(1) Typescript solution

**Author:** ap32
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3620550/](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3620550/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Try to construct the tallest 2d pyramid with the tip on the given index with no more than `maxSum` blocks. It's area is `x ** 2`, but we also should cut corners if they are not fit in the array using triangular numbers `cutWidth * (cutWidth + 1) / 2`

Formula works for non-negative integers `arr[i] >= 0`, but it should work for positive integers `arr[i]>=1`, so i just made `maxSum -= n` and then compensated it in result value `return 1 + ...`.
Base formulas depend on how wide is pyramid and how far away it's center from the sides:
`sum = x * x`
`sum = x * x - (x - a) * (x - a + 1)`
`sum = x * x - (x - a) * (x - a + 1) - (x - b) * (x - b + 1)`

It's possible to solve formulas for positive `x`;
`x = Math.floor(Math.sqrt(maxSum))`;
`x = Math.floor(0.5 * Math.sqrt((a * a - a + maxSum) * 8 + 1) - a + 0.5)`
`x = Math.floor((a * a - a + b * b - b + 2 * maxSum) / (a + b - 1) / 2)`

# Complexity
- Time complexity:
$$ O(1) $$

- Space complexity:
$$ O(1) $$

# Code
```
function maxValue(n: number, index: number, maxSum: number): number {
  maxSum -= n;

  let a = index + 1;
  let b = n - index;
  if (a > b) {
    [a, b] = [b, a];
  }

  if (a * a >= maxSum) {
    return 1 + Math.floor(Math.sqrt(maxSum));
  }

  {
    let t = b - a;
    if (b * b - t * (t + 1) / 2 >= maxSum) {
      return 1 + Math.floor(0.5 * Math.sqrt((a * a - a + maxSum) * 8 + 1) - a + 0.5);
    }
  }

  return 1 + Math.floor((a * a - a + b * b - b + 2 * maxSum) / (a + b - 1) / 2);
};
```