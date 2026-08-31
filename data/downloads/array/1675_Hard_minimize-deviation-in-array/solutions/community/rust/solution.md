# ⭐️ Rust with BinaryHeap: 87 ms

**Author:** nitrey
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimize-deviation-in-array/solutions/3223673/](https://leetcode.com/problems/minimize-deviation-in-array/solutions/3223673/)

---



```
use std::collections::BinaryHeap;
use std::cmp;

impl Solution {

    pub fn minimum_deviation(nums: Vec<i32>) -> i32 {
        let mut queue = BinaryHeap::with_capacity(nums.len());
        let mut min_n = i32::MAX;
        nums.into_iter()
            .map(|n| if n % 2 == 0 { n } else { n * 2 })
            .for_each(|n| {
                min_n = cmp::min(min_n, n);
                queue.push(n);
            });

        let mut min_diff = i32::MAX;
        while let Some(max_n) = queue.pop() {
            min_diff = cmp::min(min_diff, max_n - min_n);
            if max_n % 2 != 0 {
                break;
            }
            let div_val = max_n / 2;
            min_n = cmp::min(min_n, div_val);
            queue.push(div_val);
        }

        min_diff
    }
}
```