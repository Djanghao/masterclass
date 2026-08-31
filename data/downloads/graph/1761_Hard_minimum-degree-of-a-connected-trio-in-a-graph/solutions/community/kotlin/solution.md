# Brut force

**Author:** 2pac_shakur
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/solutions/1064720/](https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/solutions/1064720/)

---

```
    fun minTrioDegree(n: Int, edges: Array<IntArray>): Int {
        val inf = Int.MAX_VALUE
        val graph = Array(n + 1) { HashSet<Int>() } // gives TLE for LinkedList<Int>()
        var ans = inf
        for ((u, v) in edges) {
            graph[u].add(v)
            graph[v].add(u)
        }
        for ((u, v) in edges) {
            val common = graph[u].intersect(graph[v])
            for (w in common) {
                val d = graph[u].size + graph[v].size + graph[w].size - 6
                if (d < ans) ans = d
            }
        }
        return if (ans == inf) -1 else ans
    }
```