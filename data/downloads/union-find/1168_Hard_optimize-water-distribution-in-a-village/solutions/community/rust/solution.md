# Rust Kruskal's algorithm

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/2890761/](https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/2890761/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::BinaryHeap;

impl Solution {
    pub fn min_cost_to_supply_water(n: i32, wells: Vec<i32>, pipes: Vec<Vec<i32>>) -> i32 {
        let n = n as usize;
        let mut pq = BinaryHeap::new();
        
        for p in pipes { pq.push((-p[2], p[0] as usize, p[1] as usize)); }
        for i in 0 .. wells.len() { pq.push((-wells[i], 0, i + 1)); }
        let mut p = (0 .. n + 1).into_iter().collect::<Vec<usize>>();

        let mut ret = 0;
        while let Some((c, u, v)) = pq.pop() {
            if Self::find(&mut p, u) == Self::find(&mut p, v) { continue }
            ret += -c;
            Self::union_join(&mut p, u, v); 
        }

        ret
    }

    fn find(p: &mut Vec<usize>, i: usize) -> usize {
        if p[i] == i { return i }
        p[i] = Self::find(p, p[i]);
        p[i]
    }

    fn union_join(p: &mut Vec<usize>, i: usize, j: usize) {
        let (mut u, mut v) = (Self::find(p, i), Self::find(p, j));
        p[u] = v;
    }
}
```