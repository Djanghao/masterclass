# JS | Iterative solution using sets

**Author:** michaelm12358
**Votes:** 1
**Link:** [https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3860825/](https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/3860825/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each diagonal, we compute a set of all the values that appear. Then, we loop over the diagonal, building the values we've seen so far. At each point, we store the difference of the size of those sets.

# Approach
<!-- Describe your approach to solving the problem. -->
We need to run for each diagonal, which means running once for each row and each column. The only tricky part is that we need to remove from the 'suffix' set of numbers as we loop over a diagonal the second time. However, we can't simply delete numbers we encounter from the set - because there might be more than one. So, we need to use a map, where the value is the number of occurrences.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n*m)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(min(n,m))$$ - set to store the diagonal

# Code
```
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var differenceOfDistinctValues = function(grid) {
    for(let i = 0; i < grid.length; ++i) {
        computeDiag(grid, i, 0);
    }
    for(let i = 1; i < grid[0].length; ++i) {
        computeDiag(grid, 0, i);
    }

    return grid;
};

function computeDiag(grid, row, col) {
    let suffix = new Map();

    let count = Math.min(grid.length-row, grid[0].length-col);

    for(let i = 0; i < count; ++i) {
        let val = grid[row+i][col+i];
        suffix.set(val, (suffix.get(val)??0)+1);
    }

    let prefix = new Set();
    for(let i = 0; i < count; ++i) {
        let val = grid[row+i][col+i];
        if(suffix.get(val) === 1) {
            suffix.delete(val);
        } else {
            suffix.set(val, suffix.get(val)-1);
        }

        grid[row+i][col+i] = Math.abs(suffix.size - prefix.size);

        prefix.add(val);
    }
}

```