# [Rust] DFS from each node

**Author:** nakanolab
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/5385016/](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/5385016/)

---

# Complexity
- Time complexity: $O(N^2)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N^2)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

Since the return value of `get_ancestors()` could contain $O(N^2)$ data (e.g., for linear graph like `0 -> 1 -> 2 -> ... -> n-1`), memoization does not improve time complexity.

# Code
```
impl Solution {
    pub fn get_ancestors(n: i32, edges: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let n = n as usize;
        let mut rev = vec![vec![]; n];  // reverse edges that point to parents
        for edge in &edges {
            let u = edge[0] as usize;
            let v = edge[1] as usize;
            rev[v].push(u);
        }

        (0..n).map(|u| {
            let mut ancestor = vec![false; n];
            let mut stack = vec![u];
            while let Some(u) = stack.pop() {
                for &v in &rev[u] {
                    if ancestor[v] {
                        continue;
                    }
                    ancestor[v] = true;
                    stack.push(v);
                }
            }
            (0..n).filter(|&v| ancestor[v]).map(|v| v as i32).collect::<Vec<_>>()
        }).collect::<Vec<_>>()
    }
}
```