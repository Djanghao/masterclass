# Rust simple topological sort using dfs

**Author:** urparvezali
**Votes:** 0
**Link:** [https://leetcode.com/problems/course-schedule-ii/solutions/5863321/](https://leetcode.com/problems/course-schedule-ii/solutions/5863321/)

---

# Intuition
Rust simple dfs code

# Approach
dfs approach with a tracepath
# Complexity
- Time complexity:
almost O(n) time complexity
- Space complexity: regular
# Code
```rust []
use std::collections::HashSet;
impl Solution {
    pub fn find_order(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> Vec<i32> {
        let n = num_courses as usize;
        let mut graph: Vec<Vec<usize>> = vec![vec![]; num_courses as usize];
        for vec in &prerequisites {
            graph[vec[0] as usize].push(vec[1] as usize);
        }
        fn dfs(
            src: usize,
            vs: &mut Vec<bool>,
            graph: &Vec<Vec<usize>>,
            order: &mut Vec<usize>,
            trace: &mut HashSet<usize>,
        ) -> bool {
            if vs[src] {
                if trace.contains(&src) {
                    return true;
                }
                return false;
            }
            vs[src] = true;
            trace.insert(src);
            let mut res = false;
            for &node in &graph[src] {
                res |= dfs(node, vs, graph, order, trace);
            }
            order.push(src);
            trace.remove(&src);
            res
        }
        let (mut order, mut vs) = (Vec::new(), vec![false; n]);
        let mut looping = false;
        let mut trace = HashSet::new();
        for node in 0..n {
            if !vs[node] {
                looping |= dfs(node, &mut vs, &graph, &mut order, &mut trace);
            }
        }
        if !looping {
            order.into_iter().map(|val| val as i32).collect()
        } else {
            vec![]
        }
    }
}

```