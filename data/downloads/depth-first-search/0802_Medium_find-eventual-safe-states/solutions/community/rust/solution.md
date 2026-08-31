# [Rust] Easily understandable graph colouring/cycle detection using DFS.

**Author:** marccarre
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-eventual-safe-states/solutions/667633/](https://leetcode.com/problems/find-eventual-safe-states/solutions/667633/)

---

#### Performance

> Runtime: 16 ms, faster than 100.00% of Rust online submissions for Find Eventual Safe States.
> Memory Usage: 2.7 MB, less than 100.00% of Rust online submissions for Find Eventual Safe States.

#### Solution

```rust
#[derive(Clone)]
enum State {
    Unvisited,
    Visiting,
    Safe,
    Unsafe,
}

impl Solution {
    pub fn eventual_safe_nodes(graph: Vec<Vec<i32>>) -> Vec<i32> {
        let mut state = vec![State::Unvisited; graph.len()];
        let mut safe = Vec::new();
        for node in 0..graph.len() {
            if !has_cycle(node, &mut state, &graph) {
                safe.push(node as i32);
            }
        }
        safe.sort();
        safe
    }
}

fn has_cycle(node: usize, state: &mut Vec<State>, graph: &Vec<Vec<i32>>) -> bool {
    match state[node] {
        State::Safe => false,
        State::Unsafe | State::Visiting => true,
        _ => {
            state[node] = State::Visiting;
            for &neighbour in graph[node].iter() {
                if has_cycle(neighbour as usize, state, graph) {
                    state[node] = State::Unsafe;
                    return true;
                }
            }
            state[node] = State::Safe;
            false
        }
    }
}
```