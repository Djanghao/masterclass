# [Rust] Iterators, O(1) space

**Author:** tiedyedvortex
**Votes:** 1
**Link:** [https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/3609385/](https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/3609385/)

---

# Intuition
There are three planes we care about.

The ground has a shadow for any cell that has at least 1 block stacked on it. So we just count the number of grid cells that are nonzero.

Then, one side plane projection will have a shadow for the tallest tower in the rows of grid. So we get the maximum element of each row in grid, and sum them.

Finally, the other side plane has a shadow for the tallest tower in the columns of grid. So we get the maximum element of each column in grid and sum them. 


# Approach
For the ground shadow, the position of each cell is irrelevant, so we can just flat_map the entire grid.

For the row shadow, we can iterate over rows and take the max in O(1) space.

For the col shadow, we need to actually iterate over the column index and map to index into the row.


# Complexity
- Time complexity: O(n^2), we have to iterate over the entire grid a constance number of times.

- Space complexity: O(1), we perform no heap allocations.

# Code
```
impl Solution {
    pub fn projection_area(grid: Vec<Vec<i32>>) -> i32 {
        let ground: i32 = grid
            .iter()
            .flat_map(|row| row.iter())
            .map(|&cell| if cell > 0 { 1 } else { 0 })
            .sum();

        let row_shadow : i32 = grid
        .iter()
        .map(|row| row.iter().copied().max().unwrap_or_default())
        .sum();

        let col_shadow: i32 = (0..grid.len())
        .map(|j| grid.iter().map(|row| row[j]).max().unwrap_or_default())
        .sum();

        ground + row_shadow + col_shadow
    }
}
```