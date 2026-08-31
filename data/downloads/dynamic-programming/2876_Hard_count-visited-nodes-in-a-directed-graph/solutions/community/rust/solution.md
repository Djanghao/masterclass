# An implementation of count_visited_nodes in Rust

**Author:** TrueBoxGuy
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-visited-nodes-in-a-directed-graph/solutions/5541362/](https://leetcode.com/problems/count-visited-nodes-in-a-directed-graph/solutions/5541362/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Initially when seeing this problem I thought that in order to get an $$O(n)$$ solution, I could repeatedly choose a node not yet visited, find all the nodes visited in the process, and then calculate the value of the function for each of these nodes.

# Approach
<!-- Describe your approach to solving the problem. -->
I use a main loop that checks each node, and if the node has already been visited the loop has no effect.

Otherwise I follow directed edges until I reach a node that has already been visited (marking nodes visited as I follow them). If and only if the node that is already visited is in `path`, a cycle necessarily exists in the nodes visited. I calculate the loop length and set `out` for each node in the loop.

All the remaining nodes are necessarily not part of a loop, and the value for such a node `b` is thus given by `1 + visited_nodes(node that b points to)` (so we can calculate inductively `visited_nodes` for all remaining nodes visited in the main loop iteration).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
The main loop runs `n` times. If a node has already been visited, the iteration takes constant time. Otherwise the time taken is bounded above by, where `v` is the number of nodes visited in the iteration, `m * v + c` (the iteration constructs the path, calculates `loop_start`, and fills in `out`). In fact this bound also holds when `v = 0`.

So this gives a bound on the time taken for the main loop of `m * n + c`. Indeed therefore the time complexity of this algorithm is $$O(n)$$.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
The maximum memory required throughout the computation is that to store `out`, `visited` and `path`. All of these have maximum size `n`. All other variables take constant memory.
# Code
```
impl Solution {
    pub fn count_visited_nodes(edges: Vec<i32>) -> Vec<i32> {
        let mut out = vec![0; edges.len()];
        let mut visited = vec![false; edges.len()];

        for i in 0..edges.len() {
            let mut node = i;
            let mut path = vec![];
            let mut count = 0;

            // Find loop
            while !visited[node] {
                path.push(node);
                visited[node] = true; 
                node = edges[node] as usize;
                count += 1;
            }

            let loop_start = {
                path.iter().position(|&r| r == node).unwrap_or(path.len())
            };
            let loop_len = (path.len() - loop_start) as i32;
            // Fill in loop
            for _ in 0..loop_len {
                out[path.pop().unwrap()] = loop_len;
            }

            // Fill in head
            while let Some(v) = path.pop() {
                out[v] = out[edges[v] as usize] + 1;
            }
        }

        out
    }
}
```