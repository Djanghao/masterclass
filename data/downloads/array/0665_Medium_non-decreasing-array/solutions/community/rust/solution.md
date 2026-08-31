# Rust windows solution

**Author:** sugyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/non-decreasing-array/solutions/1191003/](https://leetcode.com/problems/non-decreasing-array/solutions/1191003/)

---

```rust
impl Solution {
    pub fn check_possibility(nums: Vec<i32>) -> bool {
        nums.windows(2).filter(|w| w[0] > w[1]).count() < 2
            && nums
                .windows(4)
                .all(|w| w[1] <= w[2] || w[0] <= w[2] || w[1] <= w[3])
    }
}
```