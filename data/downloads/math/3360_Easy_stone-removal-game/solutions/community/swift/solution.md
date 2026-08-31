# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-removal-game/solutions/6083953/](https://leetcode.com/problems/stone-removal-game/solutions/6083953/)

---

**Good Interview Answer (accepted answer)**
```
class Solution {
    func canAliceWin(_ n: Int) -> Bool {
        var n = n
        var stones = 10
        while n >= stones {
             n -= stones
             stones -= 1    
        }
        return stones & 1 == 1
    }
}
```
**One-Liner, terse (accepted answer)**
```
class Solution {
    func canAliceWin(_ n: Int) -> Bool {
        [10...18,27...33,40...44,49...50].first{$0 ~= n} != nil
    }
}
```