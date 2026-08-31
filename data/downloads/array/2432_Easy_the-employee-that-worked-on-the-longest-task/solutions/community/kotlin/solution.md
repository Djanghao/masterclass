# Map Solution

**Author:** 1997onurcan
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/5141005/](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/5141005/)

---

# Code
```
import kotlin.math.abs

class Solution {
    fun hardestWorker(n: Int, logs: Array<IntArray>): Int {
        val map = mutableMapOf(
            0 to mutableMapOf(logs[0][0] to logs[0][1])
        )
        for (i in 1 until logs.size) {
            val ints = logs[i]
            val prev = logs[i - 1][1]
            map[i] =
                mutableMapOf(ints[0] to abs(prev - ints[1]))
        }
        return findMaxOfByValue(map)
    }

    private fun findMaxOfByValue(map: MutableMap<Int, MutableMap<Int, Int>>): Int {
        var maxKey = Int.MAX_VALUE
        var maxValue = Int.MIN_VALUE

        for ((_, innerMap) in map) {
            for ((key, value) in innerMap) {
                if (value > maxValue || (value == maxValue && key < maxKey)) {
                    maxValue = value
                    maxKey = key
                }
            }
        }

        return maxKey
    }
}
```