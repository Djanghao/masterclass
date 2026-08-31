# breath first search, minimal elevation first

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/swim-in-rising-water/solutions/5524697/](https://leetcode.com/problems/swim-in-rising-water/solutions/5524697/)

---

```
use std::collections::{BinaryHeap,HashSet};
use std::cmp::Reverse;

impl Solution {
    pub fn swim_in_water(g: Vec<Vec<i32>>) -> i32 {
        let n = g.len();
        let mut seen = HashSet::from([(0,0)]);
        let mut q = BinaryHeap::new();
        q.push((Reverse(g[0][0]), 0, 0));

        while let Some((Reverse(x), i, j)) = q.pop() {
            if (i,j) == (n-1, n-1) {
                return x
            }
            let im = i.wrapping_sub(1);
            let ip = i+1;
            let jm = j.wrapping_sub(1);
            let jp = j+1;
            for &(ii,jj) in &[(i, jm), (i,jp), (im,j), (ip, j)] {
                if ii < n && jj < n && seen.insert((ii,jj)) {
                    q.push((Reverse(x.max(g[ii][jj])),ii,jj))
                }
            }

        }
        unreachable!()
    }
}
```