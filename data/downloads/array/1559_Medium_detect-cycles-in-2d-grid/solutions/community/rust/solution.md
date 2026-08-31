# dfs

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/5957326/](https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/5957326/)

---

```rust []
fn adj(ij: (usize, usize), grid: &Vec<Vec<char>>) -> Vec<(usize, usize)> {
    let (i, j) = ij;
    let c = grid[i][j];
    let i1 = i.wrapping_sub(1);
    let j1 = j.wrapping_sub(1);
    [(i1, j), (i+1, j), (i, j1), (i, j+1)].into_iter()
        .filter(|&(ii,jj)| grid.get(ii).and_then(|r|r.get(jj)) == Some(&c))
        .collect()
}

impl Solution {
    pub fn contains_cycle(grid: Vec<Vec<char>>) -> bool {
        let n = grid.len();
        let m = grid[0].len();
        let mut seen = vec![vec![false; m]; n];
        let mut q = vec![];
        for i in 0..n {
            for j in 0..m {
                let a = adj( (i, j), &grid)
                    .into_iter()
                    .filter(|&(i,j)|!seen[i][j]).collect::<Vec<_>>();
                seen[i][j] = true;
                if a.len() < 2 {
                    continue
                }
                let target = a[0];
                q.push(a[1]);
                while let Some(ij) = q.pop() {
                    if ij == target {return true}
                    for (i,j) in adj(ij, &grid) {
                        if !seen[i][j] {
                            seen[i][j] = true;
                            q.push((i,j))
                        }
                    }

                }
            }
        }
        false
    }
}
```