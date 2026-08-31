# Rust 0ms beats 100%

**Author:** aectaan
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/3773773/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/3773773/)

---

# Code
```
impl Solution {
    pub fn sum_of_squares(nums: Vec<i32>) -> i32 {
        let len = nums.len();
        nums.iter()
            .enumerate()
            .filter_map(|(i, x)| {
                if len % (i + 1) == 0 {
                    Some(x * x)
                } else {
                    None
                }
            })
            .sum()
    }
}
```