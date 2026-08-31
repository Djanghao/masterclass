# [Rust] DFS solution

**Author:** keep_of_kalessin
**Votes:** 4
**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solutions/1512165/](https://leetcode.com/problems/all-paths-from-source-to-target/solutions/1512165/)

---


```rust
impl Solution {
    pub fn all_paths_source_target(graph: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        all_paths_source_target(graph)
    }
}

pub fn all_paths_source_target(graph: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let mut result = vec![];
    let mut buffer = vec![0];

    for root in 0..graph[0].len() {
        dfs(&graph, &mut result, &mut buffer, graph[0][root]);
    }

    result
}

fn dfs(graph: &Vec<Vec<i32>>, result: &mut Vec<Vec<i32>>, buf: &mut Vec<i32>, current: i32) {
    buf.push(current);
    if current as usize == graph.len() - 1 {
        result.push(buf.clone());
        buf.pop();

        return;
    }

    for root in graph[current as usize].iter().copied() {
        dfs(graph, result, buf, root);
    }

    buf.pop();
}
```