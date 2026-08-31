# Rust BFS solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/is-graph-bipartite/solutions/1065382/](https://leetcode.com/problems/is-graph-bipartite/solutions/1065382/)

---

```rust
use std::collections::VecDeque;

impl Solution {
    pub fn is_bipartite(graph: Vec<Vec<i32>>) -> bool {
        let mut ab = vec![None; graph.len()];
        for i in 0..ab.len() {
            if ab[i].is_some() {
                continue;
            }
            ab[i] = Some(true);
            let mut vd = VecDeque::new();
            vd.push_back(i);
            while let Some(j) = vd.pop_front() {
                for k in graph[j].iter().map(|&k| k as usize) {
                    if ab[k] == ab[j] {
                        return false;
                    }
                    if ab[k].is_none() {
                        ab[k] = ab[j].map(|b| !b);
                        vd.push_back(k);
                    }
                }
            }
        }
        true
    }
}
```