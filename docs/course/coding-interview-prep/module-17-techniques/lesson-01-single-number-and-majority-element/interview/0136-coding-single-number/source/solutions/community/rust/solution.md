# Rust One Liner

**Author:** gavinmeier25
**Votes:** 11
**Link:** [https://leetcode.com/problems/single-number/solutions/1964665/](https://leetcode.com/problems/single-number/solutions/1964665/)

---

Ole bitwise XOR, 100% faster than all of the rust submissions
```
impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        nums.into_iter().fold(0, |prev, curr| prev ^ curr)
    }
}