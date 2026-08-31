# Rust | 0ms | 1-line | Shortest solution .chunk_by()

**Author:** JSusi
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/6055316/](https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/6055316/)

---

# Code
```rust []
impl Solution {
    pub fn max_ascending_sum(nums: Vec<i32>) -> i32 {
        nums.chunk_by(|a, b| b > a).map(|c| c.iter().sum()).max().unwrap()
    }
}
```