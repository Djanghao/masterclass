# Greedy approach with sorting

**Author:** rabusta
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/4687509/](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/solutions/4687509/)

---

# Approach
Sort descending by difference between spend and requare

# Complexity
- Time complexity: $$O(nlog(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import kotlin.math.*

class Solution {
    fun minimumEffort(tasks: Array<IntArray>): Int {
        
        tasks.sortByDescending { abs(it[0] - it[1]) }
        var ans = tasks[0][1]
        var cur = tasks[0][1]
        for (i in 0..tasks.size-1) {
            cur -= tasks[i][0]
            if (i < tasks.size-1 && cur < tasks[i+1][1]) {
                ans += tasks[i+1][1] - cur
                cur = tasks[i+1][1]
            }
        }

        return ans
    }
}
```