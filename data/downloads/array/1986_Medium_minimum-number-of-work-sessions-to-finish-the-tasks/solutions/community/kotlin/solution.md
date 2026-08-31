# Kotlin Solution

**Author:** mzeus_bolt
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/5117747/](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/solutions/5117747/)

---

# Approach
**Binary Search:**
We are performing a binary search to find the minimum number of sessions required.
The search range is [1, tasks.size].
**Backtracking Helper:**
The canComplete function checks if a certain number of sessions can complete all tasks.
It attempts to place tasks using backtracking.
**Session Tracking:**
An array sessions keeps track of the remaining time in each session.
Each task is placed into a session if there's enough space.
**Optimization:**
If a session is fully empty, trying further sessions isn't productive, so we break early.

# Complexity
- Time complexity:
k is number of tasks
$$O(k!.nlogn)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    fun minSessions(tasks: IntArray, sessionTime: Int): Int {
    tasks.sortDescending() // Sorting tasks in descending order helps distribute them effectively.

    var left = 1
    var right = tasks.size

    // Check if a certain number of sessions can complete all tasks
    fun canComplete(numSessions: Int): Boolean {
        val sessions = IntArray(numSessions) { sessionTime }

        // Helper function to try placing tasks using backtracking
        fun backtrack(taskIdx: Int): Boolean {
            if (taskIdx == tasks.size) return true

            val task = tasks[taskIdx]
            for (i in sessions.indices) {
                if (sessions[i] >= task) {
                    sessions[i] -= task
                    if (backtrack(taskIdx + 1)) return true
                    sessions[i] += task // Backtrack
                }

                // Optimization: If this session is empty, no point in trying others
                if (sessions[i] == sessionTime) break
            }

            return false
        }

        return backtrack(0)
    }

    // Binary search to find the minimum number of sessions required
    while (left < right) {
        val mid = (left + right) / 2
        if (canComplete(mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}
}
```