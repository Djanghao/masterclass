# Rust one-line solution

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/1034687/](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/1034687/)

---

```rust
impl Solution {
    pub fn k_length_apart(nums: Vec<i32>, k: i32) -> bool {
        (0..nums.len())
            .filter(|&i| nums[i] == 1)
            .try_fold(None, |prev, i| {
                if let Some(p) = prev {
                    if i - p <= k as usize {
                        return None;
                    }
                }
                Some(Some(i))
            })
            .is_some()
    }
}
```