# Rust one liner solutions

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/1551232/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/1551232/)

---

1. Simple solution with MOD-operation
```
impl Solution {
    pub fn smallest_equal(nums: Vec<i32>) -> i32 {
        nums.iter()
            .zip(0..)
            .position(|(x, i)| i % 10 == *x)
            .map_or(-1, |i| i as i32)
    }
}
```
2. Solution with cycle index (w/o MOD)
```
impl Solution {
    pub fn smallest_equal(nums: Vec<i32>) -> i32 {
        nums.iter()
            .zip((0..10).cycle())
            .position(|(x, i)| i == *x)
            .map_or(-1, |i| i as i32)
    }
}
```