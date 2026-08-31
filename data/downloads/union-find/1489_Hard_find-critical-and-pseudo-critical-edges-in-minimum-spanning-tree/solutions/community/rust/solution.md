# Rust Union-Find + Kruskal's algorithm

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/solutions/3930836/](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/solutions/3930836/)

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
    pub fn find_critical_and_pseudo_critical_edges(n: i32, edges: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let (mut s, mut t) = (HashSet::new(), HashSet::new());
        let (m, n) = (edges.len(), n as usize);
        let cost = Self::kruskal(&edges, m, m, n);
    
        for k in 0 .. edges.len() {
            if Self::kruskal(&edges, k, m, n) > cost { s.insert(k as i32); }
            if Self::kruskal(&edges, m, k, n) == cost { t.insert(k as i32); }
        }
        
        let mut ret = vec![vec![]; 2];
        for i in &t {
            if s.contains(i) == false { ret[1].push(*i); }
        }
        ret[0] = s.into_iter().collect::<Vec<_>>();
        
        ret
    }

    fn find(p: &mut Vec<usize>, i: usize) -> usize {
        if p[i] == i { return i }
        p[i] = Self::find(p, p[i]);
        p[i]
    }

    fn kruskal(edges: &Vec<Vec<i32>>, exclude: usize, include: usize, n: usize) -> i32 {
        let mut p = (0 .. n).into_iter().collect::<Vec<_>>();
        let mut edges = edges.clone();
        let (mut ret, mut cnt, m) = (0, 0, edges.len());
        
        if include < m {
            let (u, v) = (edges[include][0] as usize, edges[include][1] as usize);
            let (i, j) = (Self::find(&mut p, u), Self::find(&mut p, v));
            p[i] = j;
            cnt += 1;
            ret = edges[include][2];
        }
        if exclude.min(include) < m { edges.remove(exclude.min(include)); }
        edges.sort_by(|a, b| a[2].cmp(&b[2]));

        for e in  edges {
            let (u, v) = (e[0] as usize, e[1] as usize);
            let (i, j) = (Self::find(&mut p, u), Self::find(&mut p, v));
            if i == j { continue }
            p[i] = j;
            cnt += 1;
            ret += e[2];            
        }
        
        if cnt + 1 < n { i32::MAX } else { ret }
    }
}
```