# Rust; 0ms; beats 100%; Sort only the first 3 elements, return the middle one.

**Author:** JSusi
**Votes:** 0
**Link:** [https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/5778444/](https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/5778444/)

---

# Code
```rust []
impl Solution {
    pub fn find_non_min_or_max(mut nums: Vec<i32>) -> i32 {
        if nums.len() < 3 {
            return -1;
        }
        nums[..3].sort();
        nums[1]
    }
}
```