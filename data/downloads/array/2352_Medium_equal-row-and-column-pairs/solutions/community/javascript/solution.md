# Hash Table | Python / JS Solution

**Author:** TFDLeeter
**Votes:** 38
**Link:** [https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3630850/](https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3630850/)

---

Hello **Tenno Leetcoders**, 

For this problem, we are given a `0-indexed` `n x n` integer matrix grid, we want to `return the number of pairs (ri, cj)` such that `row ri` and `column cj` are `equal`.

### Explanation

This problem basically wants us to traverse through the matrix and check which row and columns contains the same pair values and then increment our counter once found.

To do that, we can traverse through our matrix row and use `hash table` to first store the frequencies of each row, converting each row into string representation to create unique keys using `tuple` or `JSON.stringify()` to make it hashable

We then traverse over each column of our matrix, and for each column, we create a string representation by extracting the elements from that current column using `lists`.

After extracting the current column, we now check if it exists in our hash table. If so, we increment count by its frequency

By using `hash table`, all we need to do is iterate over each row and column once


# Code

**Python**

```   
def equalPairs(self, grid: List[List[int]]) -> int:
        n = len(grid)
        count = 0
        rows = {}

        for r in range(n):
            row = tuple(grid[r])
            rows[row]= 1 + rows.get(row, 0)
        
        for c in range(n):
            col = tuple(grid[i][c] for i in range(n))
            count += rows.get(col, 0)
            
        return count``

```

**JavaScript**
```
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {

    const n = grid.length
    let count = 0
    const rows = new Map()

    for(let r = 0; r < n; r++){
        const row = JSON.stringify(grid[r])
        rows.set(row, 1 + (rows.get(row) || 0))
    }

    for(let c = 0; c < n; c++){
        const col = JSON.stringify(grid.map(row => row[c]))
        count += (rows.get(col) || 0)
    }
    
    return count
};
```
### Time Complexity: `O(n^2)`
### Space Complexity: `O(n^2)`
 
***Warframe's Darvo wants you to upvote this post  \uD83D\uDE4F\uD83C\uDFFB \u2764\uFE0F\u200D\uD83D\uDD25***

![image](./images/0.gif)