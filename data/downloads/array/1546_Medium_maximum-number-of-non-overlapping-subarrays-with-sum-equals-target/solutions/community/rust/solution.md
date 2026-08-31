# Rust Solution using prefix sum and greeedy

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/2742232/](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/2742232/)

---

```
use std::collections::*;

impl Solution {
    pub fn max_non_overlapping(nums: Vec<i32>, target: i32) -> i32 {
        let n = nums.len();
        let mut memo = vec![0;n+1];
        for i in 0..n {
            memo[i+1] = memo[i] + nums[i];
        }

        let mut count = 0;
        let mut set = HashSet::new();
        for i in (0..=n).rev() {
            let v = memo[i];
            let need = v + target;
            if set.contains(&need) {
                count += 1;
                set = HashSet::new();
            }
            set.insert(v);
        }
        count
    }
}
```