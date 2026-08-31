# Dijkstra

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5979121/](https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5979121/)

---

```rust []
use std::collections::BinaryHeap;
use std::cmp::Reverse;

impl Solution {
    pub fn find_safe_walk(grid: Vec<Vec<i32>>, health: i32) -> bool {
        let n = grid.len();
        let m = grid[0].len();
        let mut seen = vec![vec![false; m]; n];
        let mut q : BinaryHeap<(Reverse<i32>, usize, usize)> = BinaryHeap::new();
        q.push((Reverse(grid[0][0]), 0, 0));
        seen[0][0] = true;
        while let Some((Reverse(d), i, j)) = q.pop() {
            if (i, j) == (n - 1, m - 1) {
                return d < health
            }
            let i1 = i.wrapping_sub(1);
            let j1 = j.wrapping_sub(1);
            for (i,j) in [(i, j1), (i, j+1), (i1, j), (i+1, j)] {
                if seen.get(i).and_then(|v|v.get(j)) == Some(&false) {
                    q.push((Reverse(d + grid[i][j]), i, j));
                    seen[i][j] = true
                }
            }
        }
        unreachable!()
    }
}
```