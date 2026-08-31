# Efficient Rust solution (12ms)

**Author:** Andriamanitra
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/6088317/](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/6088317/)

---

# Intuition
If we update the values in order from minimum to maximum, we can always pick the smallest possible integer that doesn't invalidate the grid.

# Code
```rust []
impl Solution {
    pub fn min_score(mut grid: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let height = grid.len();
        let width = grid[0].len();
        let mut values = Vec::with_capacity(height * width);
        for i in 0..height {
            for j in 0..width {
                values.push((grid[i][j], i, j));
            }
        }
        let mut smallest_in_row = vec![0; height];
        let mut smallest_in_col = vec![0; width];

        values.sort_unstable();
        for (_, i, j) in values {
            let new_value = 1 + i32::max(smallest_in_row[i], smallest_in_col[j]);
            grid[i][j] = new_value;
            smallest_in_row[i] = new_value;
            smallest_in_col[j] = new_value;
        }
        grid
    }
}
```

# Complexity
Assuming $$N $$ is the height of the grid and $$M$$ is the width of the grid:
- Time complexity: $$O((N * M) \\log (N * M))$$ because we need to sort a Vec of all values in the grid.
- Space complexity: $$O(N * M)$$ because we need to allocate a new vec of size $$N * M$$ so we can sort the values.
