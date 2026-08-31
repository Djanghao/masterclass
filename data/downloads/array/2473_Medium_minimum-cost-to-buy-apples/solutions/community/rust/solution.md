# Rust Dijkstra's algorithm

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/2989162/](https://leetcode.com/problems/minimum-cost-to-buy-apples/solutions/2989162/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N Log N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
use std::cmp::Reverse;
use std::collections::BinaryHeap;

impl Solution {
    pub fn min_cost(n: i32, roads: Vec<Vec<i32>>, apple_cost: Vec<i32>, k: i32) -> Vec<i64> {
        let n = n as usize;
        let mut graph = vec![vec![]; n]; 

        for r in roads {
            let (u, v) = (r[0] as usize - 1, r[1] as usize - 1);
            graph[u].push((v, r[2] as i64));
            graph[v].push((u, r[2] as i64));
        }

        let mut ret = vec![i64::MAX; n];
        let mut pq = BinaryHeap::<Reverse<(i64, usize)>>::new();

        for i in 0 .. n { pq.push(Reverse((apple_cost[i] as i64, i))); }
        while let Some(Reverse((cost, u))) = pq.pop() {
            if ret[u] <= cost { continue }
            ret[u] = cost;
            for (v, c) in &graph[u] {
                if ret[*v] < ret[u] { continue }
                let t = ret[u] + *c * (k as i64 + 1);
                pq.push(Reverse((t, *v)));
            }
        }
        
        ret
    }
}
```