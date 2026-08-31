# Rust | 0ms | 1-liner

**Author:** JSusi
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/6054920/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/6054920/)

---

# Code
```rust []
impl Solution {
    pub fn find_k_distant_indices(nums: Vec<i32>, key: i32, k: i32) -> Vec<i32> {
        (0..nums.len())
            .filter_map(|i| {
                nums[i.saturating_sub(k as usize)..=(i + k as usize).min(nums.len() - 1)]
                    .contains(&key)
                    .then_some(i as i32)
            })
            .collect()
    }
}
```