# Rust beginner solution

**Author:** chenyo-17
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-good-subsequences/solutions/6030903/](https://leetcode.com/problems/sum-of-good-subsequences/solutions/6030903/)

---

# Code
```rust []
use std::collections::HashMap;

impl Solution {
    pub fn sum_of_good_subsequences(nums: Vec<i32>) -> i32 {
        const MOD: i64 = 10_i64.pow(9) + 7;
        // store the count of good subsequences ending at key
        let mut count_map = HashMap::new();
        // store the sum of good subsequences ending at key
        let mut sum_map = HashMap::new();
        for num in nums {
            // update count_map
            // [num] itself is a good subsequence
            let new_count = (1
                + count_map.get(&(num - 1)).unwrap_or(&0)
                + count_map.get(&(num + 1)).unwrap_or(&0))
                % MOD;
            count_map.entry(num).or_insert(0);
            *count_map.get_mut(&num).unwrap() = (*count_map.get(&num).unwrap() + new_count) % MOD;
            // update sum_map
            let new_sum = num as i64
                + sum_map.get(&(num - 1)).unwrap_or(&0) % MOD
                + sum_map.get(&(num + 1)).unwrap_or(&0) % MOD
                + (num as i64 * (count_map.get(&(num + 1)).unwrap_or(&0))) % MOD
                + (num as i64 * count_map.get(&(num - 1)).unwrap_or(&0)) % MOD;
            sum_map.entry(num).or_insert(0);
            *sum_map.get_mut(&num).unwrap() = (*sum_map.get(&num).unwrap() + new_sum) % MOD;
        }
        let mut sum = 0;
        for val in sum_map.values() {
            sum = (sum + val) % MOD;
        }
        sum as i32
    }
}
```