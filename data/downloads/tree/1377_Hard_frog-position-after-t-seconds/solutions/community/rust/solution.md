# Rust solution, DFS

**Author:** kennethjang34
**Votes:** 0
**Link:** [https://leetcode.com/problems/frog-position-after-t-seconds/solutions/4124920/](https://leetcode.com/problems/frog-position-after-t-seconds/solutions/4124920/)

---

>

# Code
```
use std::collections::{HashMap, HashSet};

fn get_unvisited_neighbors(edges: &Vec<i32>, visited: &HashSet<i32>) -> Vec<i32> {
    edges
        .iter()
        .cloned()
        .filter(|x| !visited.contains(x))
        .collect()
}
fn helper(
    cur: i32,
    edges: &mut HashMap<i32, Vec<i32>>,
    t: i32,
    target: i32,
    visited: &mut HashSet<i32>,
) -> f64 {
    if t == 0 {
        if cur == target {
            return 1f64;
        } else {
            return 0f64;
        }
    }
    let neighbors = get_unvisited_neighbors(&edges[&cur], &visited);
    if neighbors.len() == 0 {
        if cur == target {
            return 1f64;
        } else {
            return 0f64;
        }
    } else {
        let mut ans = 0 as f64;
        visited.insert(cur);
        for &neighbor in neighbors.iter() {
            let for_neighbor = helper(neighbor, edges, t - 1, target, visited);
            ans += for_neighbor;
        }
        visited.remove(&cur);
        return ans / neighbors.len() as f64;
    }
}
impl Solution {
    pub fn frog_position(n: i32, edges: Vec<Vec<i32>>, t: i32, target: i32) -> f64 {
        if edges.len() == 0 {
            return {
                if target == 1 {
                    1f64
                } else {
                    0f64
                }
            };
        }
        let mut hm: HashMap<i32, Vec<i32>> = HashMap::new();
        for edge in edges.iter() {
            hm.entry(edge[0])
                .and_modify(|v| v.push(edge[1]))
                .or_insert(vec![edge[1]]);
            hm.entry(edge[1])
                .and_modify(|v| v.push(edge[0]))
                .or_insert(vec![edge[0]]);
        }
        let mut hs = HashSet::new();
        return helper(1, &mut hm, t, target, &mut hs);
    }
}

```