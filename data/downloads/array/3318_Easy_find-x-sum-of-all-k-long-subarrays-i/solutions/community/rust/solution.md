# Rust solution (iterators practice)

**Author:** andrkv
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5963268/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5963268/)

---



# Code
```rust []
use std::collections::HashMap;

impl Solution {

pub fn find_x_sum(nums: Vec<i32>, k: i32, x: i32) -> Vec<i32> {
    nums.as_slice()
        .windows(k.try_into().unwrap())
        .map(|n| -> Vec<(i32, i32)> {
            let mut m = HashMap::<i32, i32>::default();
            n.iter().for_each(|num| {
                *m.entry(*num).or_insert(0) += 1;
            });

            let mut v = m.into_iter().collect::<Vec<(i32, i32)>>();
            v.sort_by(|(l_key, l_counter), (r_key, r_counter)| {
                r_counter.cmp(l_counter).then_with(|| r_key.cmp(l_key))
            });

            v
        })
        .map(|vec| -> i32 {
            vec.into_iter()
                .take(x.try_into().unwrap())
                .fold(0, |acc, (key, counter)| acc + key * counter)
        })
        .collect::<Vec<_>>()
}

}
```