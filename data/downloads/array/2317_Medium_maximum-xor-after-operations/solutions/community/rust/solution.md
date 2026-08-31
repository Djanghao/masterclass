# Rust ( fold )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-after-operations/solutions/2632157/](https://leetcode.com/problems/maximum-xor-after-operations/solutions/2632157/)

---

bitwise OR
```
impl Solution {
    pub fn maximum_xor(nums: Vec<i32>) -> i32 {
        nums.into_iter()
            .fold(0, |acc, x| acc | x)
    }
}
```