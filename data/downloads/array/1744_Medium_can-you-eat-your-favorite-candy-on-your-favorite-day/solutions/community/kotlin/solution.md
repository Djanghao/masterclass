# Kotlin O(q+c) time O(c) space

**Author:** user1482VR
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/5435023/](https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/5435023/)

---

# Code
```
class Solution {

    // O(q+c) time O(c) space
    fun canEat(candiesCount: IntArray, queries: Array<IntArray>): BooleanArray {
        val sumBefore = LongArray(candiesCount.size) { 0 }
        var sumBeforeCurrent = 0L
        for (i in 0..candiesCount.size-1) {
            sumBefore[i] = sumBeforeCurrent
            sumBeforeCurrent += candiesCount[i]
        }

        return BooleanArray(queries.size) { i ->
            val type = queries[i][0]
            val day = queries[i][1]
            val cap = queries[i][2]

            val minCandies = day+1L
            val maxCandies = (day+1L)*cap

            sumBefore[type] + candiesCount[type] >= minCandies && sumBefore[type] < maxCandies
        }
    }
}
```