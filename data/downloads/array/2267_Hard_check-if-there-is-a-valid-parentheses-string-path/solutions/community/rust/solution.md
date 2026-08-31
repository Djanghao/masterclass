# Rust (15ms) DFS + DP beats 100%

**Author:** Martician
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/4189813/](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/4189813/)

---

```
impl Solution {
    pub fn has_valid_path(grid: Vec<Vec<char>>) -> bool {
        let (m, n) = (grid.len(), grid[0].len());
        // early return if path has odd number of cells or last cell is '('
        if ((m + n) & 1 == 0) || grid[m - 1][n - 1] == '(' {
            return false;
        }

        // we transform the grid for faster arithmetic
        let mut grid: Vec<Vec<i32>> = grid
            .into_iter()
            .map(|row| {
                row.into_iter()
                    .map(|c| (c as u8 - b'(') as i32 - (b')' - c as u8) as i32)
                    .collect()
            })
            .collect();

        Self::dfs(&mut grid, &mut vec![vec![vec![false; 199]; n]; m], 0, 0, 0)
    }

    fn dfs(
        grid: &Vec<Vec<i32>>,
        dp: &mut Vec<Vec<Vec<bool>>>,
        y: usize,
        x: usize,
        acc: i32,
    ) -> bool {
        let (m, n) = (grid.len(), grid[0].len());
        if y >= m || x >= n || acc > 0 || dp[y][x][(198 + acc) as usize] {
            return false;
        }

        if y == m - 1 && x == n - 1 && acc == -1 {
            return true;
        }

        let rez = Self::dfs(grid, dp, y, x + 1, acc + grid[y][x])
            || Self::dfs(grid, dp, y + 1, x, acc + grid[y][x]);

        dp[y][x][(198 + acc) as usize] = true;
        rez
    }
}

```