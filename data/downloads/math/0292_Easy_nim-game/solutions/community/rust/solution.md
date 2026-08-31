# Rust solution

**Author:** 16yuki0702
**Votes:** 1
**Link:** [https://leetcode.com/problems/nim-game/solutions/792835/](https://leetcode.com/problems/nim-game/solutions/792835/)

---

Runtime: 0 ms, faster than 100.00% of Rust online submissions for Nim Game.
Memory Usage: 2 MB, less than 75.00% of Rust online submissions for Nim Game.
```
impl Solution {
    pub fn can_win_nim(n: i32) -> bool {
        n % 4 != 0
    }
}
```