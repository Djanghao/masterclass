# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/solutions/5026206/](https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes/solutions/5026206/)

---

```
impl Solution {
    pub fn minimum_time(n: i32, edges: Vec<Vec<i32>>, disappear: Vec<i32>) -> Vec<i32> {
        use std::cmp::Reverse;
        let mut q = std::collections::BinaryHeap::new();
        let mut adj = vec![vec![]; n as usize];
        for edges_i in &edges {
            let a = edges_i[0] as usize;
            let b = edges_i[1] as usize;
            let t = edges_i[2];
            if a == b {
                continue;
            }
            adj[a].push((b, t));
            adj[b].push((a, t));
        }
        q.push(Reverse((0, 0)));
        let mut dist = vec![std::i32::MAX; n as usize];
        let mut vis = vec![false; n as usize];
        dist[0] = 0;
        while let Some(Reverse((t, s))) = q.pop() {
            if vis[s] {
                continue;
            }
            if t >= disappear[s] {
                continue;
            }
            vis[s] = true;
            for &(i_first, ti) in &adj[s] {
                if t + ti < dist[i_first] && t + ti <= disappear[i_first] {
                    dist[i_first] = t + ti;
                    q.push(Reverse((t + ti, i_first)));
                }
            }
        }
        let mut ans = vec![];
        for i in 0..n as usize {
            if dist[i] < disappear[i] {
                ans.push(dist[i]);
            } else {
                ans.push(-1);
            }
        }
        ans
    }
}

```