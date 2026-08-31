# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/solutions/4181417/](https://leetcode.com/problems/minimum-edge-weight-equilibrium-queries-in-a-tree/solutions/4181417/)

---


```
impl Solution {
    fn dfs(u: usize, p: usize, memo: &mut Vec<Vec<i32>>, lev: &mut Vec<i32>, log: usize, adj: &Vec<Vec<(usize, i32)>>) {
        memo[u][0] = p as i32;
        for i in 1..=log {
            memo[u][i] = memo[memo[u][i - 1] as usize][i - 1];
        }
        for x in adj[u].iter() {
            let v = x.0;
            if v != p {
                lev[v] = lev[u] + 1;
                Solution::dfs(v, u, memo, lev, log, adj);
            }
        }
    }

    fn lca(u: usize, v: usize, log: usize, lev: &[i32], memo: &[Vec<i32>]) -> usize {
        let mut u = u;
        let mut v = v;
        if lev[u] < lev[v] {
            std::mem::swap(&mut u, &mut v);
        }
        println!("log: {}", log);
        for i in (0..=log).rev() {
            if (lev[u] as i64 - (1_i64 << i)) >= lev[v] as i64 {
                u = memo[u][i] as usize;
            }
        }
        if u == v {
            return u;
        }
        for i in (0..=log).rev() {
            if memo[u][i] != memo[v][i] {
                u = memo[u][i] as usize;
                v = memo[v][i] as usize;
            }
        }
        memo[u][0] as usize
    }

    fn get_count(n: usize, par: usize, adj: &Vec<Vec<(usize, i32)>>, count: &mut Vec<Vec<i32>>) {
        for i in 0..27 {
            count[n][i] += count[par][i];
        }
        for x in adj[n].iter() {
            if x.0 != par {
                count[x.0][x.1 as usize] += 1;
                Solution::get_count(x.0, n, adj, count);
            }
        }
    }

    pub fn min_operations_queries(n: i32, edges: Vec<Vec<i32>>, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let n = n as usize;
        let mut count = vec![vec![0; 27]; n];
        let mut adj = vec![vec![]; n];
        for x in edges.iter() {
            adj[x[0] as usize].push((x[1] as usize, x[2]));
            adj[x[1] as usize].push((x[0] as usize, x[2]));
        }
        Solution::get_count(0, 0, &adj, &mut count);

        let log = 32;
        let mut memo = vec![vec![-1; log + 1]; n + 1];
        let mut lev = vec![0; n + 1];
        Solution::dfs(0, 0, &mut memo, &mut lev, log, &adj);
        let mut ans = vec![];
        for x in queries.iter() {
            let l = Solution::lca(x[0] as usize, x[1] as usize, log, &lev, &memo);
            let mut tot = 0;
            let mut mx = 0;
            for i in 0..27 {
                let cur = count[x[0] as usize][i] + count[x[1] as usize][i] - 2 * count[l][i];
                tot += cur;
                mx = mx.max(cur);
            }
            ans.push(tot - mx);
        }
        ans
    }
}

```