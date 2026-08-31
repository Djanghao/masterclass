# Dijkstra

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6005981/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6005981/)

---

```rust []
use std::collections::BinaryHeap;
use std::cmp::Reverse;

impl Solution {
    pub fn min_time_to_reach(move_time: Vec<Vec<i32>>) -> i32 {
        let n = move_time.len();
        let m = move_time[0].len();
        let mut q = BinaryHeap::new();
        let mut seen = vec![vec![false; m]; n];
        q.push((Reverse(0),1,0,0));
        seen[0][0] = true;
        while let Some((Reverse(t), x, i, j)) = q.pop() {
            if (i,j) == (n-1, m-1) {return t }
            for (i,j) in [(i+1, j), (i.wrapping_sub(1),j), (i, j+1), (i, j.wrapping_sub(1))] {
                if i >= n || j >= m  || seen[i][j] {continue}
                seen[i][j] = true;
                q.push((Reverse(x+t.max(move_time[i][j])), 3-x, i, j))
            }
        }
        unreachable!()
    }
}
```