# Rust | BFS solution

**Author:** obei
**Votes:** 0
**Link:** [https://leetcode.com/problems/graph-valid-tree/solutions/5878167/](https://leetcode.com/problems/graph-valid-tree/solutions/5878167/)

---

# Approach
BFS

# Code
```rust []
use std::collections::{HashMap, HashSet, VecDeque};

impl Solution {
    pub fn valid_tree(n: i32, edges: Vec<Vec<i32>>) -> bool {
        let mut graph: HashMap<i32, HashSet<i32>> = HashMap::new();
        for e in edges.iter() {
            graph.entry(e[0]).or_insert_with(HashSet::new).insert(e[1]);
            graph.entry(e[1]).or_insert_with(HashSet::new).insert(e[0]);
        }
        let mut visited = HashSet::new();
        let mut queue = VecDeque::new();
        queue.push_back(0);
        let mut root: HashMap<i32, i32> = HashMap::new();
        while let Some(vertex) = queue.pop_front() {
            if visited.contains(&vertex) {
                if let Some(r) = root.get(&vertex) {
                    if vertex != *r {
                        return false;
                    }
                }
                continue;
            }
            visited.insert(vertex);
            if let Some(neighbors) = graph.get(&vertex) {
                for neighbor in neighbors.iter() {
                    if !visited.contains(neighbor) {
                        queue.push_back(*neighbor);
                    }
                    root.insert(*neighbor, vertex);
                }
            }
        }
        let l = visited.len() as i32;
        if l < n {
            return false
        }
        true
    }
}
```