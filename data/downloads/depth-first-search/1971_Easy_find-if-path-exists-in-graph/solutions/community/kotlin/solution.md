# DFS/BFS solution or Disjoint Set Union

**Author:** drgavrikov
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/5053892/](https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/5053892/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Classic problem: use DFS or BFS. Or we can use Disjoint Set Union Structure to union edges step by step and after this check root of source and destination.

# Complexity
- Time complexity: $O(n + m)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n + m)$ additional memory
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```DSF []
class Solution {
    fun validPath(n: Int, edges: Array<IntArray>, source: Int, destination: Int): Boolean {
        
        val used = BooleanArray(n) {false}
        
        val graph = Array(n) { mutableListOf<Int>() }
        edges.forEach { edge ->
            val from = edge[0]
            val to = edge[1]
            graph[from].add(to)
            graph[to].add(from)
        }
        
        fun dfs(vertex: Int) {
            if (used[vertex]) return
            used[vertex] = true
            for (next in graph[vertex]) dfs(next)
        }

        dfs(source)
        return used[destination]
    }
}
```
```DSU []
class Solution {
    class DSU(val n: Int) {
        private val root = IntArray(n) { it }
        private val rank = IntArray(n) { 1 }

        fun findRoot(v: Int): Int {
            if (root[v] == v) return v
            root[v] = findRoot(root[v])
            return root[v]
        }

        fun union(v: Int, w: Int) {
            val rootV = findRoot(v)
            val rootW = findRoot(w)
            if (rootV == rootW) return
            
            if (rank[rootV] > rank[rootW]) {
                rank[rootV] += rank[rootW]
                root[rootW] = rootV
            } else {
                rank[rootW] += rank[rootV]
                root[rootV] = rootW
            }
        }
    }

    fun validPath(n: Int, edges: Array<IntArray>, source: Int, destination: Int): Boolean {
        val dsu = DSU(n)
        edges.forEach { edge -> dsu.union(edge[0], edge[1]) }
        return dsu.findRoot(source) == dsu.findRoot(destination)
    }
}
```
