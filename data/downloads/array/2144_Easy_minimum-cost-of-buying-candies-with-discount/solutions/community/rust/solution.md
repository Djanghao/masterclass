# BinaryHeap

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/5037406/](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/5037406/)

---



# Code
```
use std::collections::BinaryHeap;

impl Solution {
    pub fn minimum_cost(cost: Vec<i32>) -> i32 {
        
        let mut q = cost.into_iter().collect::<BinaryHeap<_>>();
        let mut s = 0;
        while q.len() > 2 {
            let a = q.pop().unwrap();
            let b = q.pop().unwrap();
            s += a + b;
            q.pop().unwrap();
        }
        s += q.into_iter().sum::<i32>();
        s
    }
}
```