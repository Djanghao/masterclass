# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/solutions/3397585/](https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/solutions/3397585/)

---

# Code
```
impl Solution {
    pub fn minimum_visited_cells(grid: Vec<Vec<i32>>) -> i32 {
        let m = grid.len();
        let n = grid[0].len();
        let mut steps = 0;
        let mut max_i = vec![0; n];
        let mut max_j = vec![0; m];
        let mut q = vec![(0, 0)];
        let mut q1 = vec![];
        while !q.is_empty() {
            steps += 1;
            for &(i, j) in q.iter() {
                if i == m - 1 && j == n - 1 {
                    return steps;
                }
                for k in (max_i[j].max(i) + 1)..m {
                    if (k - i) as i32 > grid[i][j] {
                        break;
                    }
                    q1.push((k, j));
                }
                for k in (max_j[i].max(j) + 1)..n {
                    if (k - j) as i32 > grid[i][j] {
                        break;
                    }
                    q1.push((i, k));
                }
                max_i[j] = max_i[j].max(i + grid[i][j] as usize);
                max_j[i] = max_j[i].max(j + grid[i][j] as usize);
            }
            std::mem::swap(&mut q, &mut q1);
            q1.clear();
        }
        -1
    }
}
```