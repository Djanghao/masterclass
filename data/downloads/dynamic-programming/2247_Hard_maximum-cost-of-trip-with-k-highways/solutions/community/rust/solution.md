# Rust Solution using Bitmask and DP

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/solutions/2319853/](https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/solutions/2319853/)

---

```
impl Solution {
    pub fn maximum_cost(n: i32, highways: Vec<Vec<i32>>, k: i32) -> i32 {
        if n < k { return -1 }
        let n = n as usize;
        let mut g = vec![vec![];n];

        for arr in highways {
            let a = arr[0] as usize;
            let b = arr[1] as usize;
            g[a].push((b, arr[2]));
            g[b].push((a, arr[2]));
        }

        let mut memo = vec![vec![-1;1 << n];n];
        let mut result = -1;
        for i in 0..n {
            let mut stack = vec![(i, 1usize << i, 0)];
            for _ in 0..k {
                let mut new_stack = vec![];
                while let Some((ci, seen, cv)) = stack.pop() {
                    for &(ni, v) in &g[ci] {
                        if seen >> ni & 1 == 1 { continue }
                        let n_seen = seen | (1 << ni);
                        let nv = cv + v;
                        if memo[ni][n_seen] < nv {
                            memo[ni][n_seen] = nv;
                            new_stack.push((ni, n_seen, nv));
                        }
                    }
                }
                stack = new_stack;
            }

            for (_,_,v) in stack {
                result = std::cmp::max(result, v);
            }
        }
        result
    }
}
```