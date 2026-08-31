# 0ms

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/5674345/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/5674345/)

---

```rust []
fn c(a: u8, b:u8, c: u8, d: u8) -> bool {
    (a == c && b == d) || (a == d && b == c)
}
impl Solution {
    pub fn can_be_equal(s1: String, s2: String) -> bool {
        let s1 = s1.into_bytes();
        let s2 = s2.into_bytes();
        c(s1[0], s1[2], s2[0], s2[2]) && c(s1[1], s1[3], s2[1], s2[3])

    }
}
```