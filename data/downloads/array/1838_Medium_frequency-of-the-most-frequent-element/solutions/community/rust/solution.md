# Rust counter solution

**Author:** astadnik
**Votes:** 2
**Link:** [https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4302322/](https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4302322/)

---

# Code
```
use std::collections::BTreeMap;

impl Solution {
    pub fn max_frequency(nums: Vec<i32>, k: i32) -> i32 {
        let add_to_counter = |mut m: BTreeMap<_, _>, n| {
            *m.entry(n).or_insert(0) += 1;
            m
        };
        let freqs_m = nums.into_iter().fold(BTreeMap::new(), add_to_counter);
        let freqs: Vec<_> = freqs_m.into_iter().collect();

        let calc_new_counts = |(i, (n, count)): (usize, &(i32, i32))| {
            let f = |k: &mut i32, &(n_, count_): &(i32, i32)| {
                let incremented = count_.min(*k / (n - n_));
                *k -= (n - n_) * incremented;
                (incremented > 0).then(|| incremented)
            };
            freqs.iter().take(i).rev().scan(k, f).sum::<i32>() + count
        };
        freqs.iter().enumerate().map(calc_new_counts).max().unwrap()
    }
}
```