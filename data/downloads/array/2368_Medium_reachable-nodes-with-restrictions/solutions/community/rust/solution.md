# Rust DFS

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/2391031/](https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/2391031/)

---

~~~
use std::collections::HashSet;
impl Solution {
    pub fn reachable_nodes(n: i32, edges: Vec<Vec<i32>>, restricted: Vec<i32>) -> i32 {
        let mut graph: Vec<Vec<usize>> = vec![vec![]; n as usize];
        let mut s: HashSet<usize> = HashSet::new();
        
        for r in restricted { s.insert(r as usize); }
        for e in edges {
            let (u, v) = (e[0] as usize, e[1] as usize);
            if s.contains(&u) || s.contains(&v) { continue; }
            graph[u].push(v);
            graph[v].push(u);
        }
        
        if s.contains(&0) { return 0 }
        
        let mut sk: Vec<usize> = vec![];
        let mut ret = 0;
        let mut flag = vec![0; n as usize];
        
        sk.push(0);
        flag[0] = 1;
        while let Some(u) = sk.pop() {
            ret += 1;
            for v in &graph[u] {
                if flag[*v] == 1 { continue; }
                flag[*v] = 1;
                sk.push(*v);
            }
        }
        
        ret
    }
}
~~~