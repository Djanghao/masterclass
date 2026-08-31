# [Rust] BFS and modular arithmetic

**Author:** tiedyedvortex
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/3530822/](https://leetcode.com/problems/the-time-when-the-network-becomes-idle/solutions/3530822/)

---

# Intuition
Because all connections are equally-weighted, the fastest route is just the route with the fewest steps. This can be determined using a breadth-first search, starting from the master node and working backwards until every node has been reached.

Then, for every non-master server, we have a distance d and a patience p. The first message is sent at time 0, received at the master at time d, and the response is received by the sender at time 2d. However, the server will have continued to send messages at times [p, 2p, 3p, ... x] where x < 2d. Doing some math, we can work out that x = 2 * d - ((2d -1) % p) + 1.

Since the last message is sent at time x, the response will be received at time x + 2d, and the server will become idle at x + 2d + 1. Plugging in x, we find that the server will become idle at 4d - r, where r = (2d-1) % p.

Then we just take the maximum of these times and we're done.

# Complexity
- Time complexity: O(edges.len()), constructing the graph is the hardest part.

- Space complexity: O(edges.len()). We need to store all edges in the graph. We also store a queue and distance vector, but these are all less than or equal to the number of edges because it's a connected graph.

# Code
```
use std::collections::VecDeque;
impl Solution {
    pub fn network_becomes_idle(edges: Vec<Vec<i32>>, patience: Vec<i32>) -> i32 {
        let n = patience.len();
        let graph = edges
        .into_iter()
        .map(|v| (v[0] as usize, v[1] as usize))
        .fold(vec![Vec::new(); n], |mut graph, (u, v)| {
            graph[u].push(v);
            graph[v].push(u);
            graph
        });

        let mut distance_to_master = vec![-1; n];
        let mut queue = VecDeque::from([(0, 0)]);

        while let Some((server, steps)) = queue.pop_front() {
            if distance_to_master[server] != -1 {
                continue;
            }
            distance_to_master[server] = steps;
            
            for &next_server in graph[server].iter() {
                queue.push_back((next_server, steps+1));
            }
        }

        distance_to_master.into_iter().zip(patience.into_iter()).skip(1).map(|(d, p)| {
            let r = (2*d-1) % p;
            4*d - r
        }).max().unwrap()
    }
}
```