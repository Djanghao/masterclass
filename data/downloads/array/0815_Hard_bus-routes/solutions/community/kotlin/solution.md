# Kotlin solution

**Author:** nothingelsematters
**Votes:** 1
**Link:** [https://leetcode.com/problems/bus-routes/solutions/4278192/](https://leetcode.com/problems/bus-routes/solutions/4278192/)

---

# Approach

Build a graph with routes as vertices that are connected if the routes have common bus stops.

Add a source vertex connected with all the buses you can get on and a target vertex connected with all the buses you can get off.

Run Dijkstra algorithm to find the minimum distance.

# Complexity

$$S$$ stops and $$B$$ buses.

- Time complexity: $$O(SB^2)$$
    - `stopToBuses`: $$O(SB)$$
    - `graph`: $$O(SB^2)$$
    - naive Dijkstra: $$O(V^2 + E) = O(B^2)$$
- Space complexity: $$O(B^2 + SB)$$
    - `stopToBuses`: $$O(SB)$$
    - `graph`: $$O(B^2)$$
    - naive Dijkstra: $$O(V) = O(B)$$

# Code

```
class Solution {
    fun numBusesToDestination(routes: Array<IntArray>, source: Int, target: Int): Int {
        if (source == target) return 0

        val stopToBuses = routes.asSequence()
            .flatMapIndexed { i, stops -> stops.asSequence().map { it to i } }
            .groupBy({ it.first }) { it.second }

        val graph = mutableMapOf<Int, MutableSet<Int>>()
        for (buses in stopToBuses.values) {
            buses.forEachIndexed { i, iStop ->
                buses.asSequence().take(i).forEach {
                    graph.getOrNew(it).add(iStop)
                    graph.getOrNew(iStop).add(it)
                }
            }
        }

        stopToBuses[source]?.let { buses ->
            graph[SOURCE] = buses.toMutableSet()
            buses.forEach { graph.getOrNew(it).add(SOURCE) }
        }
        stopToBuses[target]?.let { buses ->
            graph[TARGET] = buses.toMutableSet()
            buses.forEach { graph.getOrNew(it).add(TARGET) }
        }

        return dijkstra(graph, SOURCE, TARGET)?.minus(1) ?: -1
    }

    private fun <K, V> MutableMap<K, MutableSet<V>>.getOrNew(key: K) =
        getOrPut(key) { mutableSetOf() }

    private fun dijkstra(graph: Map<Int, Collection<Int>>, source: Int, target: Int): Int? {
        val distances = mutableMapOf(source to 0)
        val used = mutableSetOf<Int>()

        while (true) {
            val (v, vDistance) = distances.asSequence()
                .filter { it.key !in used }
                .minByOrNull { it.value }
                ?: break

            used += v
            graph[v]?.forEach {
                distances[it] = minOf(vDistance + 1, distances[it] ?: Int.MAX_VALUE)
            }
        }

        return distances[target]
    }

    companion object {
        private val SOURCE = -1
        private val TARGET = -2
    }
}
```