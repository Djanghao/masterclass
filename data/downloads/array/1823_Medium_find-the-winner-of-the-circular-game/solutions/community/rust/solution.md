# Rust one line solution

**Author:** SerVasilich
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-winner-of-the-circular-game/solutions/2417368/](https://leetcode.com/problems/find-the-winner-of-the-circular-game/solutions/2417368/)

---

```
impl Solution {
    pub fn find_the_winner(n: i32, k: i32) -> i32 {
        (2..=n).fold(0,|s, x| (s+k)%x)+1
    }
}
```