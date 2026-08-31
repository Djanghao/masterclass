# Prim's Algorithm

**Author:** obei
**Votes:** 0
**Link:** [https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/5217672/](https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/5217672/)

---

Prim's Algorithm

# Code
```
use std::collections::{HashMap, HashSet, BinaryHeap};
use std::cmp::Reverse;

impl Solution {
    pub fn minimum_cost(n: i32, connections: Vec<Vec<i32>>) -> i32 {
        let edges = connections.len();
        if (edges as i32) < n - 1 {
            return -1;
        }
        let mut graph: HashMap<i32, HashSet<(i32, i32)>> = HashMap::new();
        for conn in connections.iter() {
            let (v1, v2, cost) = (conn[0], conn[1], conn[2]);
            graph.entry(v1).and_modify(|set| {
                set.insert((v2, cost));
            }).or_insert(HashSet::from([(v2, cost)]));
            graph.entry(v2).and_modify(|set| {
                set.insert((v1, cost));
            }).or_insert(HashSet::from([(v1, cost)]));
        }

        for v in 1..=n {
            if graph.get(&v).is_none() {
                return -1;
            }
        }

        let mut r = 0;

        let mut visited = HashSet::new();
        visited.insert(1);

        let mut heap = BinaryHeap::new();
        for (to, cost) in graph.get(&1).unwrap().iter() {
            heap.push((Reverse(cost), 1, to));
        }

        while let Some((Reverse(cost), from, to)) = heap.pop() {
            if visited.contains(to) {
                continue;
            }
            visited.insert(*to);
            r += cost;
            for (next_to, next_cost) in graph.get(&to).unwrap().iter() {
                heap.push((Reverse(next_cost), *to, next_to));
            }
        }
        r
    }
}
```