# Easy One Liner | O(n) & O(1) | Rust

**Author:** Prog_Jacob
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4054027/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4054027/)

---

# Code
```
impl Solution {
    pub fn sum_indices_with_k_set_bits(nums: Vec<i32>, k: i32) -> i32 {
        (0..nums.len()).filter(|i| i.count_ones() == k as u32).map(|i| nums[i]).sum()
    }
}
```