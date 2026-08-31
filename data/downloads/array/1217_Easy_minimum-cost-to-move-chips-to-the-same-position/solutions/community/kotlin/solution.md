# Simple Kotlin solution

**Author:** ganesh2shiv
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/2917170/](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/2917170/)

---

```
class Solution {
    fun minCostToMoveChips(position: IntArray): Int {
        var oddSum = 0
        var evenSum = 0
        for (i in 0..position.size-1) {
            if (position[i] % 2 != 0) oddSum += 1
            else evenSum += 1
        }
        return Math.min(oddSum, evenSum)
    }
}
```