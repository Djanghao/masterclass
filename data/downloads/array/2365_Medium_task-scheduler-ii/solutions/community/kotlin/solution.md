# Kotlin Solution || Few Lines Of Code

**Author:** pramodjoshi_22
**Votes:** 1
**Link:** [https://leetcode.com/problems/task-scheduler-ii/solutions/2388206/](https://leetcode.com/problems/task-scheduler-ii/solutions/2388206/)

---

```
class Solution {
    fun taskSchedulerII(tasks: IntArray, space: Int): Long {
        var ans = 0L
        val map = HashMap<Int, Long>()
        val diff = 1L + space
        for (i in tasks.indices) {
            val lst = map.getOrDefault(tasks[i], -diff)
            if (ans - lst < diff) {
                ans = lst + diff
            } else {
                ans++
            }
            map[tasks[i]] = ans

        }
        return ans
    }
}
