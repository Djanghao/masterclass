# Rust | Dijkstra

**Author:** obei
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/5908416/](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/5908416/)

---

# Approach
Dijkstra

# Code
```rust []
use std::collections::{HashSet, HashMap, BinaryHeap};
use std::cmp::Reverse;

impl Solution {
    pub fn minimum_cost(n: i32, highways: Vec<Vec<i32>>, discounts: i32) -> i32 {
        let mut graph = HashMap::new();
        for h in highways.iter() {
            graph.entry(h[0]).or_insert_with(HashSet::new).insert((h[1], h[2]));
            graph.entry(h[1]).or_insert_with(HashSet::new).insert((h[0], h[2]));
        }
        let mut r = HashMap::new();
        let mut visited = HashSet::new();
        let mut heap = BinaryHeap::new();
        heap.push((Reverse(0), 0, discounts));
        while let Some((Reverse(cost), vertex, remain)) = heap.pop() {
            if visited.contains(&(remain, vertex)) {
                continue;
            }
            visited.insert((remain, vertex));
            if let Some(&prev_cost) = r.get(&(remain, vertex)) {
                if cost >= prev_cost {
                    continue;
                }
            }
            r.insert((remain, vertex), cost);
            if vertex == n - 1 {
                return cost;
            }
            if let Some(neighbors) = graph.get(&vertex) {
                for (neighbor, ncost) in neighbors.iter() {
                    for (neighbor, ncost) in neighbors.iter() {
                        if remain > 0 {
                            heap.push((Reverse(cost + ncost / 2), *neighbor, remain - 1));
                        }
                        heap.push((Reverse(cost + ncost), *neighbor, remain));
                    }
                }
            }
        }
        *r.get(&(0, n - 1)).unwrap_or(&-1)
    }
}
```