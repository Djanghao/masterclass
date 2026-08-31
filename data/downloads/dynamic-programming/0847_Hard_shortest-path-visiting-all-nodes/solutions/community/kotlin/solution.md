# Kotlin - BFS, or Djikstra's SPF

**Author:** idiotleon
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-path-visiting-all-nodes/solutions/898050/](https://leetcode.com/problems/shortest-path-visiting-all-nodes/solutions/898050/)

---

The two solutions below both look a lot like the Djikstra's SPF algorithm, on the graph with equal edge weights.

```
/**
 * https://leetcode.com/problems/shortest-path-visiting-all-nodes/
 *
 * Time Complexity:     O(N * (2 ^ N))
 * Space Complexity:    O()
 *
 * References:
 *  https://leetcode.com/problems/shortest-path-visiting-all-nodes/discuss/135809/Fast-BFS-Solution-(46ms)-Clear-Detailed-Explanation-Included/237938
 *  https://leetcode.com/problems/shortest-path-visiting-all-nodes/discuss/135809/Fast-BFS-Solution-(46ms)-Clear-Detailed-Explanation-Included
 */
class Solution {
    fun shortestPathLength(graph: Array<IntArray>): Int {
        val totalVertices = graph.size
        val fullMask = (1 shl totalVertices) - 1
        
        val seen = HashSet<String>()
        val queue = LinkedList<Node>()
        for(vertex in graph.indices){
            val node = Node(vertex, 1 shl vertex)
            queue.offer(node)
            seen.add(node.toHash())
        }
        
        var steps = 0
        while(queue.isNotEmpty()){
            val size = queue.size
            
            for(sz in 0 until size){
                val cur = queue.poll()
                val vertex = cur.vertex
                val bitMask = cur.bitMask
                if(bitMask == fullMask) return steps
                for(nextVertex in graph[vertex]){
                    val nextNode = Node(nextVertex, bitMask or (1 shl nextVertex))
                    if(!seen.add(nextNode.toHash())) continue
                    queue.offer(nextNode)
                }
            }
            
            ++steps
        }
        
        return -1
    }
    
    private data class Node(val vertex: Int, val bitMask: Int){
        fun toHash() = "$vertex#$bitMask"
    }
}
```

```
/**
 * https://leetcode.com/problems/shortest-path-visiting-all-nodes/
 *
 * Time Complexity:     O(N * (2 ^ N))
 * Space Complexity:    O()
 *
 * References:
 *  https://leetcode.com/problems/shortest-path-visiting-all-nodes/discuss/135686/Java-DP-Solution
*/
class Solution {
    fun shortestPathLength(graph: Array<IntArray>): Int {
        val totalVertices = graph.size
        val fullMask = (1 shl totalVertices) - 1

        val queue = LinkedList<State>()
        val dp = Array(totalVertices) { vertex ->
            IntArray(fullMask + 1) { state ->
                when (state) {
                    1 shl vertex -> 0
                    else -> Int.MAX_VALUE
                }
            }.also {
                queue.offer(State(vertex, 1 shl vertex))
            }
        }

        while (queue.isNotEmpty()) {
            val size = queue.size

            for (sz in 0 until size) {
                val cur = queue.poll()
                val curVertex = cur.vertex
                val curBitMask = cur.bitMask

                for (nextVertex in graph[curVertex]) {
                    val nextBitMask = curBitMask or (1 shl nextVertex)

                    if (dp[nextVertex][nextBitMask] > dp[curVertex][curBitMask] + 1) {
                        dp[nextVertex][nextBitMask] = dp[curVertex][curBitMask] + 1
                        queue.offer(State(nextVertex, nextBitMask))
                    }
                }
            }
        }

        var shortest = Integer.MAX_VALUE
        for (row in dp) {
            shortest = minOf(shortest, row.last())
        }

        return shortest
    }

    private data class State(val vertex: Int, val bitMask: Int) {
        fun toHash() = "$vertex#$bitMask"
    }
}
```

[solutions - github](https://github.com/zea7ot/leetcode-solutions-kotlin-zea7ot/tree/master/src/main/kotlin/com/zea7ot/leetcode/lvl5/lc0847)

How can I not love Kotlin?!