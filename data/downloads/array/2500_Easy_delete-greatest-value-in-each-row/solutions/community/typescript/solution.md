# 🦄 Presort Rows on JS / TS

**Author:** i-am-anonymous
**Votes:** 4
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2901275/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/2901275/)

---

# Approach
- Sort rows in descending order
- Iterate over columns, find max value for each column and add it to result sum 
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(m * n * log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function deleteGreatestValue(grid: number[][]): number {
    for (const row of grid) {
        row.sort((a, b) => b - a);
    }

    let sum = 0;

    for (let x = 0; x < grid[0].length; x++) {
        let max = 0;

        for (let y = 0; y < grid.length; y++) {
            max = Math.max(max, grid[y][x]);
        }
        sum += max;
    }

    return sum;
}
```

```javascript []
function deleteGreatestValue(grid) {
    for (const row of grid) {
        row.sort((a, b) => b - a);
    }

    let sum = 0;

    for (let x = 0; x < grid[0].length; x++) {
        let max = 0;

        for (let y = 0; y < grid.length; y++) {
            max = Math.max(max, grid[y][x]);
        }
        sum += max;
    }

    return sum;
}
```
