# Easy O(N*M) beats 93% Python and Rust

**Author:** JacobPhillips1
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/5879515/](https://leetcode.com/problems/difference-of-number-of-distinct-values-on-diagonals/solutions/5879515/)

---

# Intuition
Use `i - j` (or `j - i`) to uniquely identify a diagonal with a negative slope.

Keeping a `set` for each diagonal allows counting unique values.

# Approach
1. Go forward through the given matrix and fill out the answer matrix with the current left-above set length.
2. Reset the dictionary of diagonal sets.
3. Go backward through the given matrix and update the answer matrix by subtracting the right-below count.

# Complexity
- Time complexity:
$$O(N*M)$$

- Space complexity:
$$O(N*M)$$

# Code
```python3 []
class Solution:
    def differenceOfDistinctValues(self, grid: List[List[int]]) -> List[List[int]]:
        rows = len(grid)
        cols = len(grid[0])
        ans = [[0] * cols for _ in range(rows)]            
        diag = defaultdict(set)
        for i in range(rows):
            for j in range(cols):
                ans[i][j] += len(diag[i-j])
                diag[i-j].add(grid[i][j])

        diag.clear()
        for i in range(rows-1,-1,-1):
            for j in range(cols-1,-1,-1):
                ans[i][j] = abs(ans[i][j] - len(diag[i-j]))
                diag[i-j].add(grid[i][j])
        return ans
```
```rust []
use std::collections::{HashMap, HashSet};
impl Solution {
    pub fn difference_of_distinct_values(grid: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let rows = grid.len();
        let cols = grid[0].len();
        let mut ans = vec![vec![0; cols]; rows];
        let mut diag = HashMap::new();
        for i in 0..rows {
            for j in 0..cols {
                let mut e = diag.entry(i-j).or_insert(HashSet::new());
                ans[i][j] = e.len() as i32;
                e.insert(grid[i][j]);
            }
        }

        diag.clear();
        for i in (0..rows).rev() {
            for j in (0..cols).rev() {
                let mut e = diag.entry(i-j).or_insert(HashSet::new());
                ans[i][j] = (ans[i][j] - e.len() as i32).abs();
                e.insert(grid[i][j]);
            }
        }
        ans
    }
}
```