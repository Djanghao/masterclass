# Simple DFS Backtracking Solution

**Author:** DmitryNekrasov
**Votes:** 0
**Link:** [https://leetcode.com/problems/android-unlock-patterns/solutions/5611868/](https://leetcode.com/problems/android-unlock-patterns/solutions/5611868/)

---

# Code
```
class Solution {
    fun numberOfPatterns(m: Int, n: Int): Int {
        val size = 9
        val graph = Array(size + 1) { mutableListOf<Pair<Int, Int>>() }

        graph[1] += listOf(3 to 2, 7 to 4, 9 to 5)
        graph[3] += listOf(1 to 2, 7 to 5, 9 to 6)
        graph[7] += listOf(1 to 4, 3 to 5, 9 to 8)
        graph[9] += listOf(1 to 5, 3 to 6, 7 to 8)
        graph[2] += 8 to 5
        graph[4] += 6 to 5
        graph[6] += 4 to 5
        graph[8] += 2 to 5

        for (i in 1..size) {
            for (j in 1..size) {
                if (i == j) continue
                if (graph[i].none { it.first == j }) {
                    graph[i] += j to i
                }
            }
        }

        val visited = BooleanArray(size + 1) { false }

        fun dfs(from: Int, len: Int = 0): Int {
            if (len >= n) return 0
            var count = if (len >= m - 1) 1 else 0
            visited[from] = true
            for ((to, condition) in graph[from]) {
                if (!visited[to] && visited[condition]) {
                    count += dfs(to, len + 1)
                }
            }
            visited[from] = false
            return count
        }

        return dfs(1) * 4 + dfs(2) * 4 + dfs(5)
    }
}
```