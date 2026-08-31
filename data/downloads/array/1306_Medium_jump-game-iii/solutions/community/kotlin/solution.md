# Kotlin simple BFS

**Author:** yvelianyk
**Votes:** 1
**Link:** [https://leetcode.com/problems/jump-game-iii/solutions/1619949/](https://leetcode.com/problems/jump-game-iii/solutions/1619949/)

---

```
class Solution {
    fun canReach(arr: IntArray, start: Int): Boolean {
        return dfs(start, arr, IntArray(arr.size))
    }

    private fun dfs(current: Int, arr: IntArray, visited: IntArray): Boolean {
        if (current !in arr.indices || visited[current] == 1) return false
        visited[current] = 1
        if (arr[current] == 0) return true
        return dfs(current - arr[current], arr, visited) or dfs(current + arr[current], arr, visited);
    }
}
```