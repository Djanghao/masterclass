# Idiomatic Rust

**Author:** bDrwx
**Votes:** 14
**Link:** [https://leetcode.com/problems/jewels-and-stones/solutions/323088/](https://leetcode.com/problems/jewels-and-stones/solutions/323088/)

---

```
impl Solution {
    pub fn num_jewels_in_stones(j: String, s: String) -> i32 {
        s.chars().filter(|&stoun| j.contains(stoun)).count() as i32
    }             
}
```