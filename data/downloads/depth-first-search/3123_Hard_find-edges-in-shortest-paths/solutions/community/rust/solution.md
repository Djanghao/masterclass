# Optimised Dijkstra with Edge Backtracking

**Author:** thebestrustdevtoeverexistfrfr
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5704738/](https://leetcode.com/problems/find-edges-in-shortest-paths/solutions/5704738/)

---

# Intuition

Use Dijkstra's algorithm to find the shortest path from the source to all nodes. Then, backtrack from the target to see which edges are part of those shortest paths.

# Approach
1. Build the graph using an adjacency list.
1. Run Dijkstra's algorithm with a priority queue to find the shortest distances.
3. Backtrack from the target node to identify edges on the shortest paths by checking if the path condition holds.
4. Keep the implementation efficient by using in-place updates and minimising memory usage.

# Complexity
- Time complexity: $$O((n + m) \\log n)$$

- Space complexity: $$O(n + m)$$

# Code
```rust []
use std::cmp::Reverse;
use std::collections::BinaryHeap;

impl Solution {
    pub fn find_answer(n: i32, edges: Vec<Vec<i32>>) -> Vec<bool> {
        let n = n as usize;
        let mut g = vec![Vec::new(); n];

        for (i, edge) in edges.iter().enumerate() {
            let (u, v, w) = (edge[0] as usize, edge[1] as usize, edge[2] as i64);
            g[u].push((v, w, i));
            g[v].push((u, w, i));
        }

        let mut dist = vec![i64::MAX; n];
        let mut pq = BinaryHeap::new();
        pq.push(Reverse((0, 0)));
        dist[0] = 0;

        while let Some(Reverse((d, u))) = pq.pop() {
            if d > dist[u] { continue }
            for &(v, w, _) in &g[u] {
                let new_dist = d + w;
                if new_dist < dist[v] {
                    dist[v] = new_dist;
                    pq.push(Reverse((new_dist, v)));
                }
            }
        }

        let mut ret = vec![false; edges.len()];
        let mut reachable = vec![false; n];
        let mut stack = vec![n - 1];
        reachable[n - 1] = true;

        while let Some(u) = stack.pop() {
            for &(v, w, i) in &g[u] {
                if dist[u] == dist[v] + w {
                    if !reachable[v] {
                        reachable[v] = true;
                        stack.push(v);
                    }
                    ret[i] = true;
                }
            }
        }

        ret
    }
}
```