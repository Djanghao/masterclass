# Use 1-D array of n^2 size with zero values for store and find duplicate and missed value

**Author:** tormozz48
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-missing-and-repeated-values/solutions/6101993/](https://leetcode.com/problems/find-missing-and-repeated-values/solutions/6101993/)

---


# Approach
Use 1-D array of n^2 size for store and mark found duplicate and missed numbers.
Here duplicate will be negative and missed number will be zero.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```typescript []
function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const L = grid.length;
  const nums = new Array(L * L + 1).fill(0);

  for (const row of grid) {
    for (const col of row) {
      nums[col] = nums[col] === 0 ? col : -col;
    }
  }

  let a, b;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      a = i;
    }
    if (nums[i] == 0) {
      b = i;
    }
    if (a && b) {
      break;
    }
  }

  return [a, b];
};
```