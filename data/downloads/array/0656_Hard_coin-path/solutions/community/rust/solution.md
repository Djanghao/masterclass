# Rust | Dijkstra's Algorithm

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/coin-path/solutions/3880778/](https://leetcode.com/problems/coin-path/solutions/3880778/)

---

# Intuition

To find the shortest path in a directed graph, use the **Dijkstra's Algorithm**.

# Approach

The difficult part is to reconstruct the lexicographically smallest one among all possible shortest paths. But there are some possibilities: for example, from the source vertex, we can greedily choose the lexocographically smallest vertex if multiple vertices lead to the shortest path to destination.

So how do we find out if a vertex leads to the shortest path? By utilizing the distance vector for each vertex from Dijkstra's Algorithm. We also need to search in reverse, from `destination` to `source`, to make this work. (Why?? Consider how we sort paths lexicographically...)

# Code
```rust
use std::collections::BinaryHeap;
use std::cmp::Reverse;

pub fn dijkstra(
    costs: &Vec<Option<u64>>,
    k: usize,
    src: usize,
    dst: usize,
) -> Vec<Option<u64>> {
    let n = costs.len();
    
    assert!(src < n, "source vertex outside graph");
    assert!(dst < n, "destin vertex outside graph");

    let mut ret = vec![None; n];
    ret[src] = Some(u64::MIN);

    let mut heap = BinaryHeap::new(); // min-heap
    heap.push(Reverse((u64::MIN, src)));

    while let Some(Reverse((dist, vertex))) = heap.pop() {
        if ret[vertex].unwrap_or(u64::MAX) < dist {
            // a shorter path was already revealed
            continue;
        }

        for vertex_next in (vertex.max(k) - k)..vertex {
            let weight = if let Some(inner) = costs[vertex_next] {
                inner
            } else { continue; };

            let dist_next = dist + weight as u64;
            if ret[vertex_next].unwrap_or(u64::MAX) <= dist_next {
                continue;
            }

            ret[vertex_next] = Some(dist_next);
            heap.push(Reverse((dist_next, vertex_next)));
        }
    }

    ret
}

impl Solution {
    pub fn cheapest_jump(costs: Vec<i32>, k: i32) -> Vec<i32> {
        let k = k as usize;
        let costs = costs.into_iter()
            .map(|e| if e < 0 { None } else { Some(e as u64) })
            .collect::<Vec<_>>();
        let n = costs.len();

        let (src, dst) = (usize::MIN, n - 1);
        if costs[dst].is_none() {
            return vec![];
        }

        let dist_vec = dijkstra(&costs, k, dst, src);
        // println!("dist: {:?}", dist_vec);

        let mut ret = vec![usize::MIN];

        let mut dist = if let Some(inner) = dist_vec[usize::MIN] {
            inner
        } else { return vec![]; };
        let mut vertex = src;
        
        while vertex != dst {
            dist -= costs[vertex].unwrap();

            for vertex_next in (vertex + 1)..(n.min(vertex + k + 1)) {
                if let Some(dist_next) = dist_vec[vertex_next] {
                    if dist_next == dist {
                        vertex = vertex_next;
                        break;
                    }
                }
            }

            ret.push(vertex);
        }

        ret.into_iter()
            .map(|e| e as i32 + 1)
            .collect::<Vec<_>>()
    }
}
```