# Rust | simple sliding window | beats 100%

**Author:** MichaelGov-ctrl
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6086679/](https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6086679/)

---

# Code
```rust []
impl Solution {
    pub fn minimum_sum_subarray(nums: Vec<i32>, l: i32, r: i32) -> i32 {
        let mut res = i32::MAX;
        for i in l..=r {
            for w in nums.windows(i as usize) {
                let v: i32 = w.into_iter().sum();
                if v > 0 && v < res {
                    res = v;
                }
            }
        }

        if res == i32::MAX {
            return -1
        }
        
        res
    }
}
```