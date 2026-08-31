# Directed Graph + Dynamic Programming + Dijkstra's Algorithm

**Author:** AzizKAZ
**Votes:** 1
**Link:** [https://leetcode.com/problems/network-delay-time/solutions/4336097/](https://leetcode.com/problems/network-delay-time/solutions/4336097/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Directed Graph + Dynamic Programming + Dijkstra's Algorithm
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where $n$ is the number of the elements in the $times$ array.

# Code
```
use std::collections::BinaryHeap;

impl Solution {
    pub fn network_delay_time(times: Vec<Vec<i32>>, n: i32, k: i32) -> i32 {
        let n = n as usize;
        let k = (k - 1) as usize;
        
        let mut adj = vec![Vec::new(); n];

        for i in 0..times.len() {
            let j = (times[i][0] - 1) as usize;
            let k = (times[i][1] - 1) as usize;
            let w = times[i][2];

            adj[j].push((w, k));
        }

        let mut d = vec![i32::MAX; n];
        let mut s = BinaryHeap::new();

        s.push((0, k));
        d[k] = 0;

        while !s.is_empty() {
            let p = s.pop().unwrap();

            for t in &adj[p.1] {
                if d[t.1] > d[p.1] + t.0 {
                    d[t.1] = d[p.1] + t.0;

                    s.push((-d[t.1], t.1));
                }
            }
        }

        let m = d.into_iter().max().unwrap();

        if m == i32::MAX {-1} else {m}
    }
}
```