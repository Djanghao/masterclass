# Rust solution

**Author:** sugyan
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/1571081/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/1571081/)

---

```rust
impl Solution {
    pub fn min_start_value(nums: Vec<i32>) -> i32 {
        1 - nums
            .iter()
            .scan(0, |state, &num| {
                *state += num;
                Some(*state)
            })
            .min()
            .unwrap()
            .min(0)
    }
}
```