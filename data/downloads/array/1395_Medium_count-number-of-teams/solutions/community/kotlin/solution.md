# just a variant

**Author:** igormsc
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-teams/solutions/5552151/](https://leetcode.com/problems/count-number-of-teams/solutions/5552151/)

---

# Code
```Kotlin []
class Solution {
    fun numTeams(rating: IntArray): Int =
        rating.foldIndexed(0) { i, t, x ->
            val l = (0..<i).count { rating[it] < x }
            val r = (i+1..rating.lastIndex).count { x < rating[it] }
            t + l*r + (i-l)*(rating.lastIndex - r - i)
    }
}
```