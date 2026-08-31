# [Rust] BTreeMap and BinaryHeap

**Author:** lawrencek0
**Votes:** 2
**Link:** [https://leetcode.com/problems/high-five/solutions/500442/](https://leetcode.com/problems/high-five/solutions/500442/)

---

The `iter()` method for Rust's `BinaryHeap` does not yet support heap order traversal in the stable build so I ended up using a simple for loop

```
use std::collections::{BTreeMap, BinaryHeap};

impl Solution {
    pub fn high_five(items: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        items
            .iter()
            .fold(BTreeMap::new(), |mut acc, item| {
                let mut v = acc.entry(item[0]).or_insert(BinaryHeap::new());
                v.push(item[1]);
                acc
            })
            .into_iter()
            .map(|(id, mut scores)| {
                let mut sum = 0;
                for _ in 0..5 {
                    sum += scores.pop().unwrap();
                }
                vec![id, (sum / 5_i32) as i32]
            })
            .collect()
    }
}
```