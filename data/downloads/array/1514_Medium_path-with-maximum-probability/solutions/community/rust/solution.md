# 💥 Runtime beats 97.81%, Memory beats 40.84% [EXPLAINED]

**Author:** r9n
**Votes:** 8
**Link:** [https://leetcode.com/problems/path-with-maximum-probability/solutions/5713058/](https://leetcode.com/problems/path-with-maximum-probability/solutions/5713058/)

---

# Intuition
The problem is about finding the path between two nodes in a graph that maximizes the product of edge probabilities. This is akin to finding the "most reliable" or "safest" path in terms of probability, similar to how Dijkstra's algorithm finds the shortest path by minimizing distance.

# Approach
We model this as a graph traversal problem where the objective is to maximize the probability of reaching the target node. Using a priority queue (max-heap), we prioritize exploring paths with the highest probability first, continually updating the maximum probability to each node until we reach the destination or exhaust possible paths.

# Complexity
- Time complexity:
O(E log V): Derived from processing each edge in the graph with logarithmic operations on the priority queue.

- Space complexity:
O(V + E): Space for the graph representation and probability tracking.

# Code
```rust []
use std::collections::BinaryHeap;

// Wrapper struct to handle `f64` values in a way that can be used in a BinaryHeap
#[derive(PartialEq, PartialOrd)]
struct NonNanF64(f64);

impl Eq for NonNanF64 {}

// Implement `Ord` to define the ordering in the BinaryHeap
impl Ord for NonNanF64 {
    fn cmp(&self, other: &Self) -> std::cmp::Ordering {
        // Since BinaryHeap is a max-heap by default, we reverse the order to create a min-heap behavior
        self.0.partial_cmp(&other.0).unwrap().reverse()
    }
}

impl Solution {
    // Function to find the maximum probability path between start and end nodes in a graph
    pub fn max_probability(
        n: i32,                           // Number of nodes
        edges: Vec<Vec<i32>>,             // Edge list of the graph
        succ_prob: Vec<f64>,              // Success probabilities for each edge
        start: i32,                       // Start node
        end: i32,                         // End node
    ) -> f64 {
        let n = n as usize;               // Convert `n` to usize for indexing
        let start = start as usize;       // Convert `start` to usize for indexing
        let end = end as usize;           // Convert `end` to usize for indexing

        // Construct an adjacency list where each node points to a list of tuples (neighbor, probability)
        let adjacency_list = {
            let mut res = vec![vec![]; n]; // Initialize an empty adjacency list
            for (edge, prob) in edges.into_iter().zip(succ_prob) {
                let u = edge[0] as usize;  // First node of the edge
                let v = edge[1] as usize;  // Second node of the edge
                res[u].push((v, prob));    // Add the edge to the adjacency list
                res[v].push((u, prob));    // Undirected graph: add both directions
            }
            res
        };

        // Vector to store the maximum probability to reach each node from the start node
        let mut prob_from_start = vec![0.0; n];
        prob_from_start[start] = 1.0;      // The probability of reaching the start node is 1

        // Priority queue (max-heap) to explore nodes by maximum probability first
        let mut pq: BinaryHeap<(NonNanF64, usize)> = BinaryHeap::new();
        pq.push((NonNanF64(1.0), start));  // Start the search from the start node

        // Dijkstra-like algorithm to find the maximum probability path
        while let Some((NonNanF64(prob), u)) = pq.pop() {
            if u == end {                  // If the end node is reached, return the probability
                return prob;
            }
            // Explore all neighbors of the current node
            for &(v, to_v_prob) in &adjacency_list[u] {
                let next_prob = prob * to_v_prob; // Calculate the probability of the path through this edge
                if next_prob > prob_from_start[v] {
                    // If the new path has a higher probability, update and push to the queue
                    prob_from_start[v] = next_prob;
                    pq.push((NonNanF64(next_prob), v));
                }
            }
        }

        // If no path is found to the end node, return 0
        0.0
    }
}

```