# Rust DFS & Backtracking

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3256696/](https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3256696/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1) Pich a node (0) as the root, built a rooted tree using DFS and keep a count on how many of Bob guesses are right.
2) With the tree built, perform another DFS of backtracking on the count of how many of Bob guesses are right if next child will be used as the root as the new tree.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
use std::collections::HashSet;

impl Solution {
    pub fn root_count(edges: Vec<Vec<i32>>, guesses: Vec<Vec<i32>>, k: i32) -> i32 {
        let n = edges.len();
        let mut graph = vec![vec![]; n + 1];
        let mut s = HashSet::new();

        for e in edges {
            graph[e[0] as usize].push(e[1] as usize);
            graph[e[1] as usize].push(e[0] as usize);
        }

        for g in guesses { s.insert((g[0] as usize, g[1] as usize)); }

        let mut cnt = -k;
        let mut flag = vec![0; n + 1];
        Self::dfs(0, &mut flag, &graph, &mut cnt, &s);
        
        flag = vec![0; n + 1];
        Self::back_tracking(0, &mut flag, &graph, &mut cnt, &s)
    }

    fn back_tracking(u: usize, flag: &mut Vec<i32>, graph: &Vec<Vec<usize>>, cnt: &mut i32, s: &HashSet<(usize, usize)>) -> i32 {
        let mut ret = if *cnt >= 0 { 1 } else { 0 };
        flag[u] = 1;
        for v in &graph[u] {
            if flag[*v] == 1 { continue }
            
            flag[*v] = 1;
            if s.contains(&(u, *v)) { *cnt -= 1; }
            if s.contains(&(*v, u)) { *cnt += 1; }

            ret += Self::back_tracking(*v, flag, graph, cnt, s);
            
            if s.contains(&(u, *v)) { *cnt += 1; }
            if s.contains(&(*v, u)) { *cnt -= 1; }
        }

        ret
    }

    fn dfs(u: usize, flag: &mut Vec<i32>, graph: &Vec<Vec<usize>>, cnt: &mut i32, s: &HashSet<(usize, usize)>) {
        flag[u] = 1;
        for v in &graph[u] {
            if flag[*v] == 1 { continue }

            flag[*v] = 1;
            if s.contains(&(u, *v)) { *cnt += 1; }
            Self::dfs(*v, flag, graph, cnt, s);
        }
    }
}
```