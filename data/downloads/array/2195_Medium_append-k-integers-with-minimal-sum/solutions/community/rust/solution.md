# Rust [beats 100%]

**Author:** ddaletski
**Votes:** 0
**Link:** [https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/5614262/](https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/5614262/)

---

![image.png](./images/0.png)

# Code
```
use std::collections::{BinaryHeap, HashSet};
use std::cmp::Reverse;

impl Solution {
    pub fn minimal_k_sum(mut nums: Vec<i32>, k: i32) -> i64 {
        nums.sort_unstable();

        let mut sum = 0i64;
        let mut nums_left = k as i64; // numbers left to insert
        let mut start = 1i64;

        for next_num in nums {
            let next_num = next_num as i64;
            // skip until we find a non-empty missing range between the following numbers from `nums`
            if next_num <= start {
                start = next_num + 1;
                continue;
            }

            let end = i64::min(next_num - 1, start + nums_left - 1); // end of the missing range
            let subsum = (start + end) * (end - start + 1) / 2; // sum of a [start, end]
            sum += subsum;

            nums_left -= (end - start + 1);
            start = next_num + 1;

            if nums_left == 0 {
                break;
            }
        }

        // insert values following the `max(nums)` if we inserted less than `k` values up to this moment
        if nums_left > 0 {
            let end = start + nums_left - 1;
            let subsum = (start + end) * (end - start + 1) / 2;
            sum += subsum;
        }

        sum
    }
}
```