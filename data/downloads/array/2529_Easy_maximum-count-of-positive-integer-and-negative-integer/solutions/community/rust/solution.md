# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/3018978/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/3018978/)

---

# Code
```
impl Solution {
    pub fn maximum_count(nums: Vec<i32>) -> i32 {
        let (num_neg, num_pos) = nums.iter().fold((0, 0), |(num_neg, num_pos), &x| {
            (num_neg + (x < 0) as i32, num_pos + (x > 0) as i32)
        });
        num_neg.max(num_pos)
    }
}
```