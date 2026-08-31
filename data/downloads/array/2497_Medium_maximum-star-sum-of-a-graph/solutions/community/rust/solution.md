# Rust with min heaps

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/5375485/](https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/5375485/)

---

# Code
```
use std::collections::BinaryHeap;
use std::cmp::Reverse;

impl Solution {
    pub fn max_star_sum(vals: Vec<i32>, edges: Vec<Vec<i32>>, k: i32) -> i32 {
        let mut sums = vals.clone();
        let mut heaps = vec![BinaryHeap::<Reverse<i32>>::new(); vals.len()];
        
        for (i, j) in edges.iter()
            .flat_map(|v| [(v[0] as usize, v[1] as usize),
                           (v[1] as usize, v[0] as usize)]) {
            if vals[i] > 0 {
                sums[j] += vals[i];
                heaps[j].push(Reverse(vals[i]));
                if heaps[j].len() == k as usize + 1 {
                    sums[j] -= heaps[j].pop().unwrap().0;
                }
            }
        }
        *sums.iter().max().unwrap()
    }
}
```