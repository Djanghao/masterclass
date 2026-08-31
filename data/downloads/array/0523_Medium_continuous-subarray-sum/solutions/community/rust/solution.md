# Rust | Hash Set | With Comments

**Author:** wallicent
**Votes:** 5
**Link:** [https://leetcode.com/problems/continuous-subarray-sum/solutions/2745274/](https://leetcode.com/problems/continuous-subarray-sum/solutions/2745274/)

---

Compute the prefix sums mod `k` of `nums`. Record the prefix sums that occur up to `i-2` (if any) when considering the prefix sum up to position `i`. If we have recorded a prefix sum with the same remainder mod `k`, the current remainder and the recorded remainder will cancel out when we compute the difference of the current prefix sum and the recorded prefix sum => we have found an interval where the numbers sum up to an even multiple of `k`.

Implementation notes:
* Using `scan` is pretty neat here to keep the hash set contained in the scan state instead of having to declare it outside a for loop.
* Delay the insertion of the prefix sum until after we have checked the set to consider intervals of minimum length 2.
* `then(...)` and `or_else(...)` for a nice and concise `scan` body, where we skip insertion if we have found our target.
* `any` for an early return.

```
use std::collections::HashSet;

impl Solution {
    pub fn check_subarray_sum(nums: Vec<i32>, k: i32) -> bool {
        nums.into_iter().scan((HashSet::<i32>::new(), 0), |(set, prefix_sum), num| {
            let new_prefix_sum = (*prefix_sum + num) % k;
            set.contains(&new_prefix_sum).then(|| true).or_else(|| {
                set.insert(*prefix_sum);
                *prefix_sum = new_prefix_sum;
                Some(false)
            })
        }).any(|found| found)
    }
}
```