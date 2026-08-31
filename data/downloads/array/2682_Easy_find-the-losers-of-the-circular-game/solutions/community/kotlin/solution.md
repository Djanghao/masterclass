# Kotlin Solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3870920/](https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3870920/)

---


# Code
```
class Solution {
    fun circularGameLosers(n: Int, k: Int): IntArray {
        var result = mutableListOf<Int>()
        var set = mutableSetOf<Int>()
        var i = 1
        var landing = 1

        while (!set.contains(landing)) {
            set.add(landing)
            landing = (landing + (i * k)) % n
            if (landing == 0) landing = n
            i++
        }

        for (i in 1..n) {
            if (!set.contains(i)) result.add(i)
        }

        return result.toIntArray()
    }
}
```