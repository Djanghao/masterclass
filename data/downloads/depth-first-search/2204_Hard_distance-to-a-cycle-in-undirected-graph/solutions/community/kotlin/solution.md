# Kotlin, two runs of DFS, 91 ms

**Author:** user7581dN
**Votes:** 0
**Link:** [https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/6095348/](https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/solutions/6095348/)

---

# Approach
Find the cycle by tracking which nodes we've already seen, which nodes belong to the cycle, and the first cycle node encountered.
Starting from any node in the cycle (the first one works fine), walk through the graph, incrementing the distance when not in the cycle.

# Complexity
- Time complexity:
$$O(n+e)$$

- Space complexity:
$$O(n+e)$$

# Code
```kotlin []
class Solution {
    fun distanceToCycle(n: Int, edges: Array<IntArray>): IntArray {
        val graph = Array(n) { ArrayList<Int>() }
        for ((u, v) in edges) {
            graph[u].add(v)
            graph[v].add(u)
        }

        val seen = BooleanArray(n)
        val inCycle = BooleanArray(n)
        var start = -1
        fun findCycle(u: Int, prev: Int): Boolean {
            if (seen[u]) {
                start = u
                return true
            }
            seen[u] = true
            for (v in graph[u]) if (v != prev && findCycle(v, u)) {
                inCycle[u] = true
                return u != start
            }
            return false
        }

        val result = IntArray(n)
        var seenStart = false
        fun findDistance(u: Int, prev: Int, dist: Int) {
            if (u == start && seenStart) return
            seenStart = true
            result[u] = dist
            val nextDist = dist + 1
            for (v in graph[u]) if (v != prev) {
                if (inCycle[v]) findDistance(v, u, 0) else findDistance(v, u, nextDist)
            }
        }

        findCycle(0, -1)
        findDistance(start, -1, 0)
        return result
    }
}
```