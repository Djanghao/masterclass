# Rust BFS solution

**Author:** wddwycc
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/1185551/](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/1185551/)

---

```rust
use std::collections::{HashSet, VecDeque};

impl Solution {
    pub fn count_components(n: i32, edges: Vec<Vec<i32>>) -> i32 {
        let n = n as usize;
        let adjacency_list = {
            let mut res = vec![vec![]; n];
            for edge in edges {
                res[edge[0] as usize].push(edge[1] as usize);
                res[edge[1] as usize].push(edge[0] as usize);
            }
            res
        };
        let mut res = 0;
        let mut visited = HashSet::new();
        for i in 0..n {
            if visited.contains(&i) { continue; }
            res += 1;
            let mut queue = VecDeque::new();
            queue.push_back(i);
            while let Some(node) = queue.pop_front() {
                visited.insert(node);
                for &idx in adjacency_list[node].iter() {
                    if visited.contains(&idx) { continue; }
                    queue.push_back(idx);
                }
            }
        }
        res
    }
}
```