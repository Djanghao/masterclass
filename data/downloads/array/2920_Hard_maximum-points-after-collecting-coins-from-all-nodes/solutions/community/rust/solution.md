# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/solutions/4238028/](https://leetcode.com/problems/maximum-points-after-collecting-coins-from-all-nodes/solutions/4238028/)

---


```
impl Solution {
    pub fn maximum_points(edges: Vec<Vec<i32>>, coins: Vec<i32>, k: i32) -> i32 {
        let mut g = vec![vec![]; coins.len()];
        for e in edges.iter() {
            g[e[0] as usize].push(e[1]);
            g[e[1] as usize].push(e[0]);
        }
        let mut vis = vec![0; coins.len()];
        Self::dfs(0, -1, &g, &coins, k, 0, &mut vis)
    }

    fn dfs(i: i32, p: i32, g: &Vec<Vec<i32>>, a: &Vec<i32>, k: i32, v: i32, vis: &mut Vec<i32>) -> i32 {
        if v > 13 {
            return 0;
        }
        if vis[i as usize] > v {
            return 0;
        }
        let mut op1 = (a[i as usize] >> v) - k;
        let mut op2 = a[i as usize] >> (v + 1);
        vis[i as usize] += 1;
        for j in g[i as usize].iter() {
            if *j != p {
                op1 += Self::dfs(*j, i, g, a, k, v, vis);
                op2 += Self::dfs(*j, i, g, a, k, v + 1, vis);
            }
        }
        op1.max(op2)
    }
}

```