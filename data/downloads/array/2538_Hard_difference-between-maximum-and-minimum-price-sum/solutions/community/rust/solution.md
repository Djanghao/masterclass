# Rust DFS and Backtracking

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3055415/](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3055415/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use DFS twice, with the first one to calculate maximum cost of each subtree, and the second to calculate the answer with rerooting on a child.   
# Approach
<!-- Describe your approach to solving the problem. -->
1) Use dfs to calculate the maximum cost (array dist[]) choosen 0 as the root
2) Set ret = dist[0] - price[0].
3) Recursively call backtracking on u to refine ret with each child of u as the new root.
4) In calculating the cost with the new root v, we only need to consider two of the three types of paths:
    a) paths from parent u to other nodes that are not v's siblings;
    b) paths from parent u to other siblings.
    c) Paths under the subtee rooted at v, these could be ignored since we are only interested in paths with biggest cost.    

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N Log N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
use std::collections::BTreeMap;

impl Solution {
    pub fn max_output(n: i32, edges: Vec<Vec<i32>>, price: Vec<i32>) -> i64 {
        let n = n as usize;
        let mut graph = vec![vec![]; n];

        for e in edges {
            let (u, v) = (e[0] as usize, e[1] as usize);
            graph[u].push(v);
            graph[v].push(u);
        }

        let mut dist = vec![0; n];
        Self::dfs(&graph, &price, &mut dist, 0, -1);

        let mut ret = dist[0] - price[0] as i64;
        Self::backtracking(&graph, &price, &dist, &mut ret, 0, -1, 0);
        
        ret
    }

    fn dfs(graph: &Vec<Vec<usize>>, price: &Vec<i32>, dist: &mut Vec<i64>, u: usize, p: i32) {
        dist[u] = price[u] as i64;

        for v in &graph[u] {
            if p == *v as i32 { continue }

            Self::dfs(graph, price, dist, *v, u as i32);
            dist[u] = dist[u].max(dist[*v] + price[u] as i64);
        }
    }

    fn backtracking(graph: &Vec<Vec<usize>>, price: &Vec<i32>, dist: &Vec<i64>, ret: &mut i64, u: usize, p: i32, p_max: i64) {
        let mut mp = BTreeMap::<i64, i32>::new();

        for v in &graph[u] {
            if p == *v as i32 { continue }
            
            *mp.entry(dist[*v]).or_insert(0) += 1;
        }

        for v in &graph[u] {
            if p == *v as i32 { continue }
            
            if *mp.get(&dist[*v]).unwrap() == 1 { mp.remove(&dist[*v]); }
            else { *mp.entry(dist[*v]).or_insert(0) -= 1; }

            let mut temp = price[u] as i64 + p_max;
            if mp.is_empty() == false { temp = temp.max(price[u] as i64 + *mp.keys().next_back().unwrap()); }
            *ret = (*ret).max(temp);
            Self::backtracking(graph, price, dist, ret, *v, u as i32, temp);
    
            *mp.entry(dist[*v]).or_insert(0) += 1;
        } 
    }
}
```