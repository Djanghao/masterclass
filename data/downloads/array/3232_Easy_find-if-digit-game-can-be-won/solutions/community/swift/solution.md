# One line, runtime 4ms solution.

**Author:** ChouChien
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5557210/](https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5557210/)

---

![\u622A\u5716 2024-07-30 \u4E0B\u53483.05.51.png](./images/0.png)


# Code
```
class Solution {
    func canAliceWin(_ nums: [Int]) -> Bool {
        nums.reduce(into: 0) {$0 += ($1 < 10 ? $1 : -$1) } != 0
    }
}
```