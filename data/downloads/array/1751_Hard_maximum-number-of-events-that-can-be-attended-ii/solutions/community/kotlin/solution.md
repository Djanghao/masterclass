# Kotlin, Dynamic approach O(N * k)

**Author:** mihaillinkov
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3768347/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3768347/)

---

# Intuition
We could use dynamic programming approach, where is the new state with $$m$$ events is maximum of best previous score visiting $$m - 1$$ events which ended before current event started + $$value$$ of current event, previous state visiting $$m$$ events and current state. 

It's important to properly order events, one of possible solutions is sorting them by event's end. 

Also we need to find optimal solution to find index of last event ended before current one started. We could use binary search, but it would add $$O(log N)$$ complexity, so it's important to find constant time algorithm. It could be achieved by using two pointers approach. 
At first - create sorted list of events start time. Then - create sorted list of events end time. For simplicity we remove duplicates in each list. After that just apply two pointers approach starting from right side of list. For simplicity we could also add artificial 0 element to events add time.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- $$O(N * k)$$ + $$O(N * log(N))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- $$O(N * k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun maxValue(events: Array<IntArray>, k: Int): Int {
        val starts = events.map { it[0] }.distinct().sorted()
        val ends = listOf(0) + events.map { it[1] }.distinct().sorted()
        val endsIdx = ends.mapIndexed { i, v -> v to i }.toMap()
        val prev = mutableMapOf<Int, Int>()

        var j = ends.lastIndex
        for (i in starts.indices.reversed()) {
            while (starts[i] <= ends[j]) j--

            prev[starts[i]] = j
        }

        val dp = Array(ends.size + 1) { IntArray(k + 1) }

        for ((start, end, value) in events.sortedBy { it[1] }) {
            val p = prev[start]!!
            val i = endsIdx[end]!!

            for (j in k downTo 1) {
                dp[i][j] = maxOf(dp[i][j], dp[i - 1][j], dp[p][j - 1] + value)
            }
        }

        return dp.map { it.max()!! }.max()!!
    }
}
```