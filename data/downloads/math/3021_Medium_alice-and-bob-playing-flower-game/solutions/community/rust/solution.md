# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/4644371/](https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/4644371/)

---


```
impl Solution {
    pub fn flower_game(n: i32, m: i32) -> i64 {
        let mut ans = 0_i64;
        for i in 1..=n.min(m) {
            ans += (m - i + 1) as i64 / 2;
            ans += (n - i + 1) as i64 / 2;
        }
        ans
    }
}

```