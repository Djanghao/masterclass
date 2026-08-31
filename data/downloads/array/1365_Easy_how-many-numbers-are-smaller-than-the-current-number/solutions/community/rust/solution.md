# Rust, clean and functional one-liner (0ms, 2.2 MB)

**Author:** encoding_error
**Votes:** 8
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/1095467/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/1095467/)

---

```
impl Solution {
    pub fn smaller_numbers_than_current(nums: Vec<i32>) -> Vec<i32> {
        nums.iter()
            .map(|i| nums.iter().filter(|j| *j < &i).count() as i32)
            .collect()
    }
}
```