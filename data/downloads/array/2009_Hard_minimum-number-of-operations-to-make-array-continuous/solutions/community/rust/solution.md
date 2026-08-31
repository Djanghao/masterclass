# Rust | 25ms | 6 lines

**Author:** RBird111
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4151952/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4151952/)

---

# Code
```rust
impl Solution {
    pub fn min_operations(mut nums: Vec<i32>) -> i32 {
        let n = nums.len() as i32;
        nums.sort_unstable();
        nums.dedup();
        nums.iter().enumerate().fold(n, |ops, (i, l)| {
            ops.min(n - (nums.partition_point(|&m| m < l + n) - i) as i32)
        })
    }
}
```