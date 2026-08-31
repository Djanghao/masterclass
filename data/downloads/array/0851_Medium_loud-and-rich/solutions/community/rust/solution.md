# Iterative DFS

**Author:** germanov_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/loud-and-rich/solutions/5528338/](https://leetcode.com/problems/loud-and-rich/solutions/5528338/)

---

# Approach

* Build a reversed graph for `richer` as an adjacency list, so, it will show directions from poor to richer.
* Run DFS for each node in graph
* While traversing, it will go over the item itself and all who is richer, so, I just found the item with minimum value in `quiet` array.
* Push node with minimum value to the resulting array

# Complexity
- Time complexity:
$$O(n*(V+E))$$

- Space complexity:
$$O(V+E)$$

# Code
```
use std::collections::HashSet;
impl Solution {
    pub fn loud_and_rich(richer: Vec<Vec<i32>>, quiet: Vec<i32>) -> Vec<i32> {
        let mut result = vec![];
        let mut graph = vec![vec![];quiet.len()];
        for edge in richer {
            graph[edge[1] as usize].push(edge[0])
        }
        for item in 0..quiet.len() {
            let mut stack = vec![item];
            let mut visited = HashSet::new();
            let (mut louder,mut min) = (item, quiet[item as usize]);
            while !stack.is_empty() {
                let item = stack.pop().unwrap();
                if visited.contains(&item) { continue }
                visited.insert(item);
                if quiet[item as usize] < min {
                    min = quiet[item as usize];
                    louder = item;
                }
                for dest_item in &graph[item as usize] {
                    stack.push(*dest_item as usize);
                }
            }
            result.push(louder as i32);
        }
        result
    }
}
```