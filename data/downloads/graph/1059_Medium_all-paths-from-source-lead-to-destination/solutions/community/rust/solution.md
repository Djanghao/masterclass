# Rust Simple Solution Using DFS

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solutions/2315529/](https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solutions/2315529/)

---

~~~
impl Solution {
    pub fn leads_to_destination(n: i32, edges: Vec<Vec<i32>>, source: i32, destination: i32) -> bool {
        let n = n as usize;
        // -1 yet to visit;
        // 0: being evaluated;
        // 1: verified good (going to destination eventually)
        let mut flag = vec![-1; n]; 
        let mut graph = vec![vec![]; n];
        for e in edges { graph[e[0] as usize].push(e[1] as usize); }
        
        Self::dfs(&graph, source as usize, destination as usize, &mut flag)
    }

    fn dfs(graph: &Vec<Vec<usize>>, u: usize, destination: usize, flag: &mut Vec<i32>) -> bool {
        if graph[u].is_empty() { return u == destination }
        if flag[u] != -1 { return flag[u] == 1; }

        flag[u] = 0;
        for v in &graph[u] {
            if Self::dfs(graph, *v, destination, flag) == false { return false } 
        }
        flag[u] = 1;
        
        true
    }
}
~~~