# 2ms. BFS with truncation

**Author:** phihung
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/5673581/](https://leetcode.com/problems/shortest-cycle-in-a-graph/solutions/5673581/)

---

# Code
```rust []
use std::collections::VecDeque;

impl Solution {
    pub fn find_shortest_cycle(n: i32, edges: Vec<Vec<i32>>) -> i32 {
        let n = n as usize;
        let mut adj_list = vec![vec![]; n];
        for e in edges {
            adj_list[e[0] as usize].push(e[1] as usize);
            adj_list[e[1] as usize].push(e[0] as usize);
        }
        let mut length = i32::MAX;
        let mut dist = vec![-1; n];
        for root in 0..n {
            let mut queue = VecDeque::new();
            queue.push_back(root);
            dist[root] = (root * n) as i32;
            'a: while let Some(node) = queue.pop_front() {
                if (dist[node] - dist[root]) * 2 + 1 >= length {
                    break;
                }
                for &next in &adj_list[node] {
                    if dist[next] == dist[node] {
                        length = dist[node] + dist[next] - 2 * dist[root] + 1;
                        break 'a;
                    }
                    if dist[next] > dist[node] {
                        length = dist[node] + dist[next] - 2 * dist[root] + 1;
                        break;
                    }
                    if root < next && dist[next] < dist[root] {
                        dist[next] = dist[node] + 1;
                        queue.push_back(next);
                    }
                }
            }
        }
        if length == i32::MAX {
            -1
        } else {
            length
        }
    }
}
```