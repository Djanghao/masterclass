# Commented BFS

**Author:** phihung
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/5674623/](https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/solutions/5674623/)

---

# Code
```rust []
use std::collections::VecDeque;

// 1. The solution exists iff there is no cycle of odd length
// 2. For connected graph: magnificent_sets = 1 + max(distance between 2 nodes)
// 3. For non-connected graph: Sum of result for each connected component
impl Solution {
    pub fn magnificent_sets(n: i32, edges: Vec<Vec<i32>>) -> i32 {
        let n = n as usize;
        let mut adj_list = vec![vec![]; n];
        for e in edges {
            let (e0, e1) = ((e[0] - 1) as usize, (e[1] - 1) as usize);
            adj_list[e0].push(e1);
            adj_list[e1].push(e0);
        }

        // Pointer to the first node of connected component
        let mut group = vec![0; n];
        // Max distance between two nodes of the same connected components
        let mut max_distances = vec![];
        let mut dist = vec![-1; n];
        for root in 0..n {
            if dist[root] >= 0 {
                // The node belongs to an existing connected component
                group[root] = group[dist[root] as usize / n];
            } else {
                // New connected component
                max_distances.push(0);
                group[root] = max_distances.len() - 1;
            };
            let distance = &mut max_distances[group[root]];

            // BFS
            let mut queue = VecDeque::new();
            queue.push_back(root);
            dist[root] = (root * n) as i32;
            while let Some(node) = queue.pop_front() {
                for &next in &adj_list[node] {
                    if dist[next] == dist[node] {
                        // Cycle of length impair
                        return -1;
                    }
                    if dist[next] < dist[root] {
                        dist[next] = dist[node] + 1;
                        // Update max distance between 2 nodes
                        *distance = (*distance).max(dist[next] - dist[root]);
                        queue.push_back(next);
                    }
                }
            }
        }
        max_distances.iter().sum::<i32>() + max_distances.len() as i32
    }
}
```