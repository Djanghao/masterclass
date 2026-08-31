# Rust Solution with Collecting Edge Count & Node Count

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-complete-components/solutions/3521969/](https://leetcode.com/problems/count-the-number-of-complete-components/solutions/3521969/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::HashSet;

impl Solution {
    pub fn count_complete_components(n: i32, edges: Vec<Vec<i32>>) -> i32 {
        let n = n as usize;
        let mut graph = vec![vec![]; n];
        
        for e in edges {
            let (u, v) = (e[0] as usize, e[1] as usize);
            graph[u].push(v);
            graph[v].push(u);
        }
        
        let mut ret = 0;
        let mut flag = vec![0; n];
        
        for u in 0 .. n {
            if flag[u] == 1 { continue }
            
            let mut s = HashSet::new();
            let mut count = 0;
            Self::dfs(u, &graph, &mut flag, &mut s, &mut count);
            if count * (count - 1) == s.len() * 2 { ret += 1; }
        }
        
        ret
    }
    
    fn dfs(u: usize, graph: &Vec<Vec<usize>>, flag: &mut Vec<i32>, s: &mut HashSet<usize>, count: &mut usize) {
        flag[u] = 1;
        *count += 1;
        
        for v in &graph[u] {
            let v = *v;
            s.insert(u.min(v) * flag.len() + u.max(v));
            if flag[v] == 1 { continue }
            
            Self::dfs(v, graph, flag, s, count);
        }
    }
}
```