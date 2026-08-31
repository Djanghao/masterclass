# Kotlin Simple Solution using HashSet ✅

**Author:** qing306038
**Votes:** 3
**Link:** [https://leetcode.com/problems/path-crossing/solutions/2819918/](https://leetcode.com/problems/path-crossing/solutions/2819918/)

---

# Approach
For each direction, change the x/y values; keep track of the points that are already visited using a set. If you get to a point that is already visited, the answer is `true`, and if that never happens, return `false`.

# Complexity
- Time complexity:
`O(N)` loop through the points once and HashSet's `contains()` time complexity is `O(1)`.

- Space complexity:
`O(N)` for the set's size

# Code
```
class Solution {
    fun isPathCrossing(path: String): Boolean {
        var curr = 0 to 0
        var set = HashSet<String>();
        set.add("0,0")
        for (i in path) {
            if (i == 'N') curr = curr.first to curr.second + 1
            if (i == 'E') curr = curr.first + 1 to curr.second
            if (i == 'S') curr = curr.first to curr.second - 1
            if (i == 'W') curr = curr.first - 1 to curr.second
            if (!set.add("${curr.first},${curr.second}")) {
                return true
            }
        }
        return false
    }
}
```
Note: the set's add function will return `false` if the item is already in the set.