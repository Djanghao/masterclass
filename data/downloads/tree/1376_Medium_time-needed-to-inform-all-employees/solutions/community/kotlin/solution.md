# [Kotlin] DFS solution. (reverse tree traversal)

**Author:** Hibbah
**Votes:** 1
**Link:** [https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/3592476/](https://leetcode.com/problems/time-needed-to-inform-all-employees/solutions/3592476/)

---

# Intuition
The maximum time to reach the root from each leaf node.

<br>

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

<br>

# Code
```
// cache[employee] == time to [employee => headID]
private lateinit var cache: IntArray

fun numOfMinutes(n: Int, headID: Int, manager: IntArray, informTime: IntArray): Int {
    // init cache & assign base case (head => head : 0)
    cache = IntArray(n) { -1 }.apply { this[headID] = 0 }

    var result = 0
    for ((employee, time) in informTime.withIndex()) {
        if (time == 0) { // 'employee' is leaf node
            result = max(result, timeToRoot(employee, manager, informTime))
        }
    }

    return result
}

// return time to [employee => headID]
private fun timeToRoot(employee: Int, manager: IntArray, informTime: IntArray): Int {
    return if (cache[employee] != -1) cache[employee] // already calculated
    else {
        val parent = manager[employee]
        val time = informTime[parent]

        // DFS(parent => root) + time(parent - employee)
        (timeToRoot(parent, manager, informTime) + time).also {
            cache[employee] = it
        }
    } 
}
```