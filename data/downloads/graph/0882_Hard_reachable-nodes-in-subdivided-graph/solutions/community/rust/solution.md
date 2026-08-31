# Rust Reachable Nodes

**Author:** k4g4
**Votes:** 0
**Link:** [https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/4348546/](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/4348546/)

---

# Code
```
#[derive(Default, Clone)]
struct Node {
    adjacents: Vec<(usize, i32)>,
    moves: i32,
    visited: bool,
}

impl Solution {
    pub fn reachable_nodes(edges: Vec<Vec<i32>>, max_moves: i32, n: i32) -> i32 {
        let mut nodes = vec![Node::default(); n as usize];
        for edge in &edges {
            nodes[edge[0] as usize].adjacents.push((edge[1] as usize, edge[2]));
            nodes[edge[1] as usize].adjacents.push((edge[0] as usize, edge[2]));
        }
        nodes[0].moves = max_moves;
        nodes[0].visited = true;
        let mut queued = vec![0];
        while let Some(curr) = queued.pop() {
            let moves = nodes[curr].moves;
            for i in 0..nodes[curr].adjacents.len() {
                let (adj, dist) = nodes[curr].adjacents[i];
                let remaining = moves - dist - 1;
                if remaining >= 0 {
                    let adjacent = &mut nodes[adj];
                    adjacent.visited = true;
                    if adjacent.moves < remaining {
                        adjacent.moves = remaining;
                        queued.push(adj);
                    }
                }
            }
        }
        let mut reachable = 0;
        for node in &nodes {
            if node.visited {
                reachable += 1;
            }
        }
        for edge in &edges {
            let moves = nodes[edge[0] as usize].moves + nodes[edge[1] as usize].moves;
            reachable += moves.min(edge[2]);
        }
        reachable
    }
}
```