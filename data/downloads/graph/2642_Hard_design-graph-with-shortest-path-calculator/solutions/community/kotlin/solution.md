# Kotlin solution

**Author:** nothingelsematters
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4274562/](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4274562/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

Dijkstra algorithm for `shortestPath`.

# Complexity
- Time complexity:
  - `init`: $$O(E)$$
  - `addEdge`: $$O(1)$$
  - `shortestPath`: $$O(V^2 + E)$$ (naive Dijkstra implementation)

- Space complexity:
  - Storing $$O(E)$$
  - `shortestPath`: $$O(V)$$

# Code
```
class Graph(n: Int, inputEdges: Array<IntArray>) {

    val edges = mutableMapOf<Int, MutableList<Pair<Int, Int>>>()

    init {
        inputEdges.forEach(::addEdge)
    }

    fun addEdge(edge: IntArray) {
        val (from, to, cost) = edge
        edges.getOrPut(from) { mutableListOf() }.add(Pair(to, cost))
    }

    fun shortestPath(node1: Int, node2: Int): Int {
        val used = mutableSetOf<Int>()
        val distances = mutableMapOf(node1 to 0)

        while (true) {
            val v = distances.asSequence()
                .filter { it.key !in used }
                .minByOrNull { it.value }
                ?: break

            used += v.key
            edges[v.key]?.forEach { (to, cost) ->
                distances[to] = minOf(v.value + cost, distances[to] ?: Int.MAX_VALUE)
            }
        }

        return distances[node2] ?: -1
    }
}
```