# Rust Solution using bfs

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-islands/solutions/4088623/](https://leetcode.com/problems/number-of-distinct-islands/solutions/4088623/)

---

# Complexity
- Time complexity:
$$O(n*m)$$

- Space complexity:
$$O(n*m)$$

# Code
```
use std::collections::*;

impl Solution {
  pub fn num_distinct_islands(mut grid: Vec<Vec<i32>>) -> i32 {
    let n = grid.len();
    let m = grid[0].len();
    let mut total_set = HashSet::new();
    for i in 0..n {
      for j in 0..m {
        if grid[i][j] == 1 {
          let mut stack = vec![(i,j)];
          grid[i][j] = 0;
          let mut set = HashSet::new();
          while !stack.is_empty() {
            let mut new_stack = vec![];
            while let Some((ci,cj)) = stack.pop() {
              set.insert((ci,cj));
              if 0 < ci && grid[ci-1][cj] == 1 {
                grid[ci-1][cj] = 0;
                new_stack.push((ci-1,cj));
              }
              if ci < n-1 && grid[ci+1][cj] == 1 {
                grid[ci+1][cj] = 0;
                new_stack.push((ci+1,cj));
              }
              if 0 < cj && grid[ci][cj-1] == 1 {
                grid[ci][cj-1] = 0;
                new_stack.push((ci,cj-1));
              }
              if cj < m-1 && grid[ci][cj+1] == 1 {
                grid[ci][cj+1] = 0;
                new_stack.push((ci,cj+1));
              }
            }
            stack = new_stack;
          }

          let mut arr = set.into_iter().collect::<Vec<_>>();
          let mut min_i = 100;
          let mut min_j = 100;
          let mut max_i = 0;
          let mut max_j = 0;
          for &(i,j) in &arr {
            min_i = min_i.min(i);
            min_j = min_j.min(j);
            max_i = max_i.max(i);
            max_j = max_j.max(j);
          }

          let height = max_i - min_i + 1;
          let width = max_j - min_j + 1;
          let mut memo = vec![vec![0;width];height];
          for &(i,j) in &arr {
            memo[i-min_i][j-min_j] = 1;
          }

          total_set.insert(memo);
        }
      }
    }

    total_set.len() as i32
  }
}
```