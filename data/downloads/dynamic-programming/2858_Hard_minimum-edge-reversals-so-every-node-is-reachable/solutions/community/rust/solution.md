# Rust: DFS twice

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/solutions/5600974/](https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/solutions/5600974/)

---

# Code
```
impl Solution {
    pub fn min_edge_reversals(n: i32, edges: Vec<Vec<i32>>) -> Vec<i32> {
        let mut adj = vec![Vec::<(usize, bool)>::new(); n as usize];
        for (u, v) in edges.iter().map(|e| (e[0] as usize, e[1] as usize)) {
            adj[u].push((v, false));
            adj[v].push((u, true));
        }
        let inv = Self::count_inv(0, 0, &adj);
        let mut ans = vec![0; n as usize];
        Self::solve(0, 0, inv, &mut ans, &adj);
        ans
    }

    fn count_inv(i: usize, prev: usize, adj: &Vec<Vec<(usize, bool)>>) -> i32 {
        let mut inv = 0;
        for &(j, is_inv) in adj[i].iter().filter(|&&(j, _)| j != prev) {
            if is_inv {
                inv += 1;
            }
            inv += Self::count_inv(j, i, adj);
        }
        inv
    }

    fn solve(i: usize, prev: usize, acc: i32,
    ans: &mut Vec<i32>, adj: &Vec<Vec<(usize, bool)>>) {
        ans[i] = acc;
        for &(j, is_inv) in adj[i].iter().filter(|&&(j, _)| j != prev) {
            let acc2 = acc + if is_inv { -1 } else { 1 };
            Self::solve(j, i, acc2, ans, adj);
        }
    }
}
```