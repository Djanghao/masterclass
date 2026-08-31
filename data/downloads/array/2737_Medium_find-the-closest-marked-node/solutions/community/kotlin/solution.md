# Simple Dijkstra

**Author:** kshitij6325
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-closest-marked-node/solutions/5810636/](https://leetcode.com/problems/find-the-closest-marked-node/solutions/5810636/)

---

# Intuition
Since it is a weighted graph and we need to find the minimum distance, Dijkstra algorithm is what we will go with here.

# Approach
- We first build a graph, which is adjacency list using ```bG``` function.  
- We then intialise a distance array, which mark the minimum distance from ```s``` to all other nodes that can be reached in our ```bfsFill``` function. 
- Finally we check if we can reach any ```marked``` nodes by comparing  it with ```distance``` that we filled above and return the min among them if we can reach any node else -1

# Complexity
- Time complexity:
bfsFill = O(nodes+edges(log node))
bG = O(edges)
comparision = O(nodes)

- Space complexity:
distance  = O(nodes)
Priority queue for Dijkstra = O(nodes)

# Code
```kotlin []
class Solution {
    fun minimumDistance(n: Int, edges: List<List<Int>>, s: Int, marked: IntArray): Int {

        val graph = bG(edges)
        val distance = IntArray(n) { Int.MAX_VALUE }
        bfsFill(s, graph, distance)

        var ans = Int.MAX_VALUE

        for (i  in distance.indices) {
            if (marked.contains(i) && distance[i] != Int.MAX_VALUE) {
                ans = min(ans, distance[i])
            }
        }

        return if (ans == Int.MAX_VALUE) -1 else ans

    }

    fun bfsFill(source: Int, graph: Map<Int, MutableList<IntArray>>, distance: IntArray) {
        val queue = PriorityQueue<IntArray> { t1, t2 -> t1[1] - t2[1] }
        queue.add(intArrayOf(source, 0))

        while (!queue.isEmpty()) {
            val node = queue.poll()
            val nodeN = node[0]
            val distanceN = node[1]

            graph[nodeN]?.forEach {
                if (distance[it[0]] > distanceN + it[1]) {
                    queue.add(intArrayOf(it[0], distanceN + it[1]))
                    distance[it[0]] = distanceN + it[1]
                }
            }
        }
    }

    fun bG(edges: List<List<Int>>): Map<Int, MutableList<IntArray>> {
        val graph = hashMapOf<Int, MutableList<IntArray>>()
        for (edge in edges) {
            graph[edge[0]] = (graph[edge[0]] ?: mutableListOf()).apply { add(intArrayOf(edge[1], edge[2])) }
        }

        return graph
    }
}
```