# Difference of Distinct Values

**Author:** jtmthf
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/6083840/](https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/6083840/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function differenceOfDistinctValues(grid: number[][]): number[][] {
  return Array.from({ length: grid.length }, (_, row) =>
    Array.from({ length: grid[0].length }, (_, column) => {
      const leftAbove = new Set<number>();
      const rightBelow = new Set<number>();
      let rowIndex = row - 1;
      let columnIndex = column - 1;

      // calculate left above
      while (rowIndex >= 0 && columnIndex >= 0) {
        leftAbove.add(grid[rowIndex--][columnIndex--]);
      }

      rowIndex = row + 1;
      columnIndex = column + 1;

      // calculate right below
      while (rowIndex < grid.length && columnIndex < grid[0].length) {
        rightBelow.add(grid[rowIndex++][columnIndex++]);
      }

      return Math.abs(leftAbove.size - rightBelow.size);
    }),
  );
}

```