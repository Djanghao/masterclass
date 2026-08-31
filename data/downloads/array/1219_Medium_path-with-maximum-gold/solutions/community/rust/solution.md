# Rust DFS solution

**Author:** mimanshu-maheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-with-maximum-gold/solutions/6058057/](https://leetcode.com/problems/path-with-maximum-gold/solutions/6058057/)

---


# Code
```rust []
/*
[[0,6,0],
 [5,8,7],
 [0,9,0]]
4 directions
only once 
can't go to 0 cell 
any start or end point
if I do a dfs 
for all grids as starting point 
if I start from a grid what is the max I can collect 
if their are not possible option return 0 
else return max of four direction. 
mark the cell as visited once you have taken its content.
*/
impl Solution {
    pub fn get_maximum_gold(mut grid: Vec<Vec<i32>>) -> i32 {
        let m = grid.len();
        // Safety: As we have atleast one row then this should not throw error.
        let n = grid[0].len();
        let mut max_gold = 0;
        for row in 0..m {
            for col in 0..n {
                // only start with cells which have gold
                if grid[row][col] != 0 {
                    max_gold = max_gold.max(Self::dfs(&mut grid, row, col));
                }
            }
        }
        max_gold
    }
    fn dfs(grid: &mut Vec<Vec<i32>>, row: usize, col: usize) -> i32 {
        // base case 
        if grid[row][col] == 0 {
            return 0;
        }
        // recursive case 
        let mut local_max = 0;
        // save the value of gold in current cell so that we can restore it later.
        let gold = grid[row][col];
        // mark the current cell as visited
        grid[row][col] = 0;
        // check the path through neighboring cells
        for (r, c) in Self::neighbors(grid.len(), grid[0].len(), row, col) {
            local_max = local_max.max(Self::dfs(grid, r, c));
        }
        // restore the values
        grid[row][col] = gold;
        // return local max gold after adding the value of current cell
        local_max + gold
    }
    /// get neighbors for current cell
    fn neighbors(m: usize, n: usize, row: usize, col:usize) -> impl Iterator<Item=(usize, usize)> {
        let mut nbrs = Vec::new();
        // up 
        if row > 0 {
            nbrs.push((row - 1, col));
        }
        // down
        if row + 1 < m {
            nbrs.push((row + 1, col));
        }
        // right
        if col + 1 < n {
            nbrs.push((row, col + 1));
        }
        // left
        if col > 0 {
            nbrs.push((row, col - 1));
        }
        nbrs.into_iter()
    }
}
```