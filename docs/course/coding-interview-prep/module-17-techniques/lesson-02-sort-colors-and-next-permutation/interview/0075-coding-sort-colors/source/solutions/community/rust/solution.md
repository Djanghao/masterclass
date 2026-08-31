# Rust One Pass

**Author:** Qba101
**Votes:** 7
**Link:** [https://leetcode.com/problems/sort-colors/solutions/849331/](https://leetcode.com/problems/sort-colors/solutions/849331/)

---

```rust
impl Solution {
    pub fn sort_colors(nums: &mut Vec<i32>) {
        /* 
        The idea is iterating through to push 0s and 2s to sides
        Indices i0 and i2 mark the boundary so that
            0s over [0, i0)
            1s over [i0, i2)
            2s over [i2, len)
        */
        let (mut i, mut i0, mut i2) = (0, 0, nums.len());
        
        while i < i2 {
            match nums[i] {
                0 => { nums.swap(i, i0); i0 += 1; i += 1; },
                2 => { i2 -= 1; nums.swap(i, i2); },
                _ => { i += 1 },
            }
        }
    }
}
```