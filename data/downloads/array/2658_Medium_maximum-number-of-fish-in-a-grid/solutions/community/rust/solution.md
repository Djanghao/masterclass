# Easy DFS Solution | O(n) | Rust

**Author:** Prog_Jacob
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/3466898/](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/3466898/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn find_max_fish(mut grid: Vec<Vec<i32>>) -> i32 {
        let mut ans = 0;

        for i in 0..grid.len() {
            for j in 0..grid[0].len() {
                if grid[i][j] > 0 {
                    ans = ans.max(dfs(&mut grid, i, j));
                }
            }
        }
        
        ans
    }
}

fn dfs(grid: &mut Vec<Vec<i32>>, i: usize, j: usize) -> i32 {
    if i >= grid.len() || j >= grid[0].len() || grid[i][j] == 0 { return 0 };
    let val = grid[i][j];
    grid[i][j] = 0;

    dfs(grid, i + 1, j) +
    dfs(grid, i - 1, j) +
    dfs(grid, i, j + 1) +
    dfs(grid, i, j - 1) + val
}
```