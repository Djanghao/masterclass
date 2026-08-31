# Rust | Beats 100.00%

**Author:** hassam_472
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/6072650/](https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/6072650/)

---


# Code
```rust []
use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn check_ways(pairs: Vec<Vec<i32>>) -> i32 {
        // Step 1: Construct graph (adjacency list) and degree map
        let mut neighbors: HashMap<i32, HashSet<i32>> = HashMap::new();
        for pair in pairs {
            neighbors.entry(pair[0]).or_insert(HashSet::new()).insert(pair[1]);
            neighbors.entry(pair[1]).or_insert(HashSet::new()).insert(pair[0]);
        }
        
        // Step 2: Identify potential root
        let mut root = -1;
        for (&node, set) in &neighbors {
            if set.len() == neighbors.len() - 1 {
                root = node;
            }
        }
        if root == -1 {
            return 0; // No valid root
        }

        // Step 3: Sort nodes by degree (descending order)
        let mut nodes: Vec<_> = neighbors.keys().cloned().collect();
        nodes.sort_by(|&a, &b| neighbors[&b].len().cmp(&neighbors[&a].len()));

        let mut result = 1; // Tracks if there are multiple ways
        for &node in &nodes {
            if node == root {
                continue;
            }

            // Find parent candidate
            let mut parent_candidate = -1;
            let mut min_degree = usize::MAX; // Use usize to match the type of len()
            for &neighbor in &neighbors[&node] {
                if neighbors[&neighbor].len() < min_degree && neighbors[&neighbor].len() >= neighbors[&node].len() {
                    parent_candidate = neighbor;
                    min_degree = neighbors[&neighbor].len();
                }
            }
            if parent_candidate == -1 {
                return 0; // No valid parent
            }

            // Validate parent-child relationship
            for &neighbor in &neighbors[&node] {
                if neighbor != parent_candidate && !neighbors[&parent_candidate].contains(&neighbor) {
                    return 0; // Invalid tree structure
                }
            }

            // Check for multiple ways
            if neighbors[&parent_candidate].len() == neighbors[&node].len() {
                result = 2;
            }
        }

        result
    }
}

```