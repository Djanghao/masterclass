# Rust - Plain Parsing

**Author:** idiotleon
**Votes:** 1
**Link:** [https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/1649729/](https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/1649729/)

---

```
/// @author: Leon
/// https://leetcode.com/problems/a-number-after-a-double-reversal/
/// Time Complexity:    O(1)
/// Space Complexity:   O(1)
impl Solution {
    pub fn is_same_after_reversals(num: i32) -> bool {
        num == 0 || num % 10 != 0
    }
}
```