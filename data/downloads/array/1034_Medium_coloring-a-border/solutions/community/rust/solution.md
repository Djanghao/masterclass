# Depth-First Search

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/coloring-a-border/solutions/4342366/](https://leetcode.com/problems/coloring-a-border/solutions/4342366/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Depth-First Search
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(m * n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(m * n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn color_border(
        mut grid: Vec<Vec<i32>>, 
        row: i32, col: i32, color: i32
    ) -> Vec<Vec<i32>> {
        let m = grid.len();
        let n = grid[0].len();    

        let i = row as usize;
        let j = col as usize;

        let mut v = vec![vec![false; n]; m];
        let mut ng = vec![vec![0; n]; m];

        Self::dfs(i, j, color, &mut v, &grid, &mut ng);

        for i in 0..m {
            for j in 0..n {
                if !v[i][j] {
                    ng[i][j] = grid[i][j];
                }
            }
        }

        ng
    }

    pub fn dfs(
        i: usize, j: usize, c: i32,
        v: &mut Vec<Vec<bool>>, 
        cg: &Vec<Vec<i32>>, ng: &mut Vec<Vec<i32>>
    ) {
        let m = cg.len();
        let n = cg[0].len();

        v[i][j] = true;
        ng[i][j] = cg[i][j];

        if i < m - 1 {
            if cg[i + 1][j] != cg[i][j] {
                ng[i][j] = c;
            } else if !v[i + 1][j] {
                Self::dfs(i + 1, j, c, v, cg, ng);
            }
        } else {
            ng[i][j] = c;
        }

        if i > 0 {
            if cg[i - 1][j] != cg[i][j] {
                ng[i][j] = c;
            } else if !v[i - 1][j] {
                Self::dfs(i - 1, j, c, v, cg, ng);
            }
        } else {
            ng[i][j] = c;
        }

        if j < n - 1 {
            if cg[i][j + 1] != cg[i][j] {
                ng[i][j] = c;
            } else if !v[i][j + 1] {
                Self::dfs(i, j + 1, c, v, cg, ng);
            }
        } else {
            ng[i][j] = c;
        }

        if j > 0 {
            if cg[i][j - 1] != cg[i][j] {
                ng[i][j] = c;
            } else if !v[i][j - 1] {
                Self::dfs(i, j - 1, c, v, cg, ng);
            }
        } else {
            ng[i][j] = c;
        }
    }
}
```