# Easy Dynamic BFS in Kotlin🙆O(n + q)

**Author:** mtkrm
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/6088290/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/6088290/)

---

# Only four steps in this approach!

### 1. Graph Initialization:
- An array `dist` is used to store the shortest distance from node 0 to every other node.
- Initial state: `[0, 1, 2, 3, ... n - 1]`
- `dist[n-1]` is the shortest path to the end

### 2. Handling Queries:
- For each query (roadStart, roadEnd), a new road is added to the graph.
- If the newly added road offers a shorter path to roadEnd, the distance is updated.

### 3. BFS:
- A Breadth-First Search (BFS) propagates the updated distances to all affected nodes (neighbors), ensuring that all shortest paths are recalculated efficiently.

### 4. Result Accumulation:
- After processing each query, the shortest path to the last node (dist[n-1]) is appended to the result list!

# Code
```kotlin []
class Solution {
    fun shortestDistanceAfterQueries(n: Int, queries: Array<IntArray>): IntArray {
        // init a graph to manage roads
        val g = MutableList(n) { mutableListOf<Int>() }
        for (i in 0 until n - 1) {
            g[i].add(i + 1)
        }
        g[n - 1].dropLast(1) // last node doesn't have outgoing connection

        // this data structure holds the shortest path from 0 to `i`.
        val dist = IntArray(n) { Int.MAX_VALUE }
        dist[0] = 0
        for (i in 1 until n) {
            dist[i] = i
        }

        val result = mutableListOf<Int>()

        // iteration of queries
        for ((roadStart, roadEnd) in queries) {
            // add the new road
            g[roadStart].add(roadEnd)

            // update shortest paths 
            if (dist[roadStart] + 1 < dist[roadEnd]) {
            // this condition is important!
            // because it avoids updating dist[roadEnd] 
            // if there has been better queries (shorter paths) to dist[roadEnd]
                val queue = ArrayDeque<Int>()
                queue.add(roadEnd)
                dist[roadEnd] = dist[roadStart] + 1

                // reflect changes in neighbors by bfs
                // in the worst case, the entire graph needs to be traversed for O(n) times
                while (queue.isNotEmpty()) {
                    val curr = queue.removeFirst()
                    for (neighbor in g[curr]) {
                        if (dist[curr] + 1 < dist[neighbor]) {
                            dist[neighbor] = dist[curr] + 1
                            queue.add(neighbor)
                        }
                    }
                }
            }

            result.add(dist[n - 1])
        }

        return result.toIntArray()
    }
}
```

```