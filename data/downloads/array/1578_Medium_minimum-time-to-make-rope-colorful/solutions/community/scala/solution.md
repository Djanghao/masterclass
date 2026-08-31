# Scala solution

**Author:** mjgallag
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/2652961/](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/2652961/)

---


```
object Solution {
    def minCost(colors: String, neededTime: Array[Int]): Int = {
        var res = 0
        var cost = 0
        for (i <- 0 to colors.length - 1) {
            if (i > 0 && colors(i) != colors(i - 1)) {
                cost = 0
            }
            res += cost.min(neededTime(i))
            cost = cost.max(neededTime(i))
        }
        res
    }
}

```