# Rust + BFS

**Author:** unknown-
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-enclaves/solutions/3388205/](https://leetcode.com/problems/number-of-enclaves/solutions/3388205/)

---

```
impl Solution {
    pub fn num_enclaves(mut grid: Vec<Vec<i32>>) -> i32 {
        let m = grid.len() as i32;
        let n = grid[0].len() as i32;
        let dirs = [(-1, 0), (1, 0), (0, 1), (0, -1)];

        let mut ret = 0;

        for i in 0..m {
            for j in 0..n {
                if grid[i as usize][j as usize] == 1 {
                    grid[i as usize][j as usize] = 0;

                    let mut t = vec![];
                    t.push((i, j));
                    let mut border = false;
                    let mut idx = 0;

                    while idx < t.len() {
                        let (i, j) = t[idx];
                        idx += 1;

                        for (di, dj) in dirs {
                            let ni = i + di;
                            let nj = j + dj;
                            if ni < 0 || ni >= m || nj < 0 || nj >= n {
                                border = true;
                            } else if grid[ni as usize][nj as usize] == 1 {
                                grid[ni as usize][nj as usize] = 0;
                                t.push((ni, nj));
                            }
                        }
                    }

                    if border == false {
                        ret += t.len();
                    }
                }
            }
        }

        ret as i32
    }
}
```