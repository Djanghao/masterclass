# Rust + BFS

**Author:** unknown-
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3651324/](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/solutions/3651324/)

---

```
impl Solution {
    pub fn count_paths(grid: Vec<Vec<i32>>) -> i32 {
        use std::collections::BinaryHeap;
        use std::cmp::Reverse;

        let mut heap = BinaryHeap::new();
        let mut values = vec![vec![-1; grid[0].len()]; grid.len()];

        let n = grid.len() as i32;
        let m = grid[0].len() as i32;
        
        for i in 0..n {
            'outer: for j in 0..m {
                for (di, dj) in [(-1, 0), (0, 1), (1, 0), (0, -1)] {
                    if i + di >= 0 && i + di < n && j + dj >= 0 && j + dj < m {
                        if grid[(i + di) as usize][(j + dj) as usize] < grid[i as usize][j as usize] {
                            continue 'outer;
                        }
                    }
                }
                heap.push((Reverse(grid[i as usize][j as usize]), i, j));
                values[i as usize][j as usize] = 0;
            }
        }

        let mut ret = 0;
        const M: i32 = 1_000_000_007;
        while let Some((_, i, j)) = heap.pop() {
            let mut tile_value = 1;
            for (di, dj) in [(-1, 0), (0, 1), (1, 0), (0, -1)] {
                if i + di >= 0 && i + di < n && j + dj >= 0 && j + dj < m {
                    if grid[(i + di) as usize][(j + dj) as usize] < grid[i as usize][j as usize] {
                        tile_value = (values[(i + di) as usize][(j + dj) as usize] + tile_value) % M;
                    }
                    if values[(i + di) as usize][(j + dj) as usize] == -1 {
                        values[(i + di) as usize][(j + dj) as usize] = 0;
                        heap.push((Reverse(grid[(i + di) as usize][(j + dj) as usize]), i + di, j + dj));
                    }
                }
            }
            values[i as usize][j as usize] = tile_value;
            ret = (ret + tile_value) % M;
        }

        ret
    }
}
```