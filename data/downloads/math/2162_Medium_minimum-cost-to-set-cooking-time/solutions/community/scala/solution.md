# 👍Runtime 473 ms  Beats 100.00% of users with Scala

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/4807671/](https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/4807671/)

---

# Code
```
object Solution {
    def minCostSetTime(startAt: Int, moveCost: Int, pushCost: Int, targetSeconds: Int): Int = {
        val mins = targetSeconds / 60
        val secs = targetSeconds % 60
        val firstOption = cost(mins, secs, startAt, moveCost, pushCost)
        val secondOption = cost(mins - 1, secs + 60, startAt, moveCost, pushCost)
        Math.min(firstOption, secondOption)
    }

    private def cost(mins: Int, secs: Int, startAt: Int, moveCost: Int, pushCost: Int): Int = {
        if (mins > 99 || secs > 99 || mins < 0 || secs < 0) return Int.MaxValue
        val s = (mins * 100 + secs).toString
        var curr = (startAt + '0').toChar
        var res = 0
        for (i <- 0 until s.length) {
            if (s.charAt(i) == curr) res += pushCost
            else {
                res += pushCost + moveCost
                curr = s.charAt(i)
            }
        }
        res
    }
}
```