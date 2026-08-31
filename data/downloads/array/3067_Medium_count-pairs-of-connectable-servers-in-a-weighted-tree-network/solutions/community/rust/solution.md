# Rust / DFS or BFS

**Author:** rust4everything
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/4817047/](https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/4817047/)

---

## DFS
```rust
impl Solution {
    pub fn count_pairs_of_connectable_servers(edges: Vec<Vec<i32>>, signal_speed: i32) -> Vec<i32> {
        let n = edges.len() + 1;
        let mut graph = vec![vec![]; n];
        for edge in edges {
            graph[edge[0] as usize].push((edge[1] as usize, edge[2]));
            graph[edge[1] as usize].push((edge[0] as usize, edge[2]));
        }

        let mut res = vec![0; n];
        for root in 0..n {
            let mut cnt_sum = 0;
            for &(next, w) in &graph[root] {
                let cnt = Self::dfs(root, next, w, signal_speed, &graph);
                res[root] += cnt * cnt_sum;
                cnt_sum += cnt;
            }
        }
        res
    }

    fn dfs(root: usize, next: usize, dist: i32, signal_speed: i32, graph: &Vec<Vec<(usize, i32)>>) -> i32 {
        let mut cnt = 0;
        if dist % signal_speed == 0 {
            cnt += 1;
        }

        for &(next_next, w) in &graph[next] {
            if next_next != root {
                cnt += Self::dfs(next, next_next, dist + w, signal_speed, graph);
            }
        }
        cnt
    }
}
```

## BFS
```rust
use std::collections::VecDeque;

impl Solution {
    pub fn count_pairs_of_connectable_servers(edges: Vec<Vec<i32>>, signal_speed: i32) -> Vec<i32> {
        let n = edges.len() + 1;
        let mut graph = vec![vec![]; n];
        for edge in edges {
            let a = edge[0] as usize;
            let b = edge[1] as usize;
            let w = edge[2];
            graph[a].push((b, w));
            graph[b].push((a, w));
        }

        
        let mut res = vec![0; n];
        for root in 0..n {
            let mut queue = VecDeque::new();
            queue.push_back((root, 0, 0));

            let mut groups = vec![0; graph[root].len()];
            let mut used = vec![false; n];

            while !queue.is_empty() {
                let (cur, group, dist) = queue.pop_front().unwrap();
                used[cur] = true;
                
                for i in 0..graph[cur].len() {
                    let (next, next_w) = graph[cur][i];
                    
                    if used[next] {
                        continue;
                    }
                    
                    let mut new_group = group;
                    if cur == root {
                        new_group = i;
                    }
                    
                    queue.push_back((next, new_group, dist + next_w));
                    if (dist + next_w) % signal_speed == 0 {
                        groups[new_group] += 1;
                    }
                }
            }
            
            let mut sum: i32 = groups.iter().sum();
            for i in 0..groups.len() {
                sum -= groups[i];
                res[root] += groups[i] * sum;
            }
        }
        res
    }
}
```