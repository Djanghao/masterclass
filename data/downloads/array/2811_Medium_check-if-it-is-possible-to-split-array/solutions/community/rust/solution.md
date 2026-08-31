# Rust Solution

**Author:** JammyJ0
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3873709/](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3873709/)

---

Initially thought this was a dp problem. Tried this and it passed.
```
impl Solution {
    pub fn can_split_array(nums: Vec<i32>, m: i32) -> bool {
        nums.len() < 3 || nums.windows(2).any(|w| (w[1] + w[0]) >= m)
    }
}
```