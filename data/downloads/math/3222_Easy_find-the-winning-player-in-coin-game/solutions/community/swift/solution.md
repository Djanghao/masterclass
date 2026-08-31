# Swift👍1liner

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5508130/](https://leetcode.com/problems/find-the-winning-player-in-coin-game/solutions/5508130/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
    func losingPlayer(_ x: Int, _ y: Int) -> String {
        ["Bob","Alice"][min(x, y/4) % 2]
    }
}
```