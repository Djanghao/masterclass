# TypeScript O(n^2) Using the Median

**Author:** el_rookie
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/4318914/](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/4318914/)

---

```
function minOperations(grid: number[][], x: number): number {
  const nums: number[] = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      nums.push(grid[i][j]);
    }
  }
  if (nums.length === 1) return 0;
  nums.sort((a, b) => a - b);
  const median = nums[Math.floor(nums.length / 2)];
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    const diff = Math.abs(median - nums[i]);
    const operations = diff / x;
    if ((operations | 0) === operations) {
      total += operations;
    } else {
      return -1;
    }
  }
  return total;
};
```