# Kotlin Topological sort and build matrix

**Author:** james4388
**Votes:** 2
**Link:** [https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5509638/](https://leetcode.com/problems/build-a-matrix-with-conditions/solutions/5509638/)

---

Using topo sort Kann algorithm on row and column separately and then use that to rebuild matrix. Since only k number from 1..k in k * k matrix, each number can be on one row and one column, no overlap
```
class Solution {
    fun topologicalSort(edges: Array<IntArray>, n: Int): List<Int> {
        val graph = mutableMapOf<Int, MutableList<Int>>()
        val inDegree = IntArray(n + 1)
        val order = mutableListOf<Int>()
        for ((before, after) in edges) {
            graph[before] = graph.getOrDefault(before, mutableListOf<Int>())
            graph[before]!!.add(after)
            inDegree[after] += 1
        }
        val toVisit = ArrayDeque<Int>((1..n).filter({ inDegree[it] == 0 }))
        while (toVisit.isNotEmpty()) {
            val node = toVisit.removeFirst()
            order.add(node)
            for (nextNode in graph.getOrDefault(node, emptyList())) {
                inDegree[nextNode] -= 1
                if (inDegree[nextNode] == 0) {
                    toVisit.add(nextNode)
                }
            }  
        }
        if (order.size != n) {
            return emptyList()
        }
        return order
    }
    
    fun buildMatrix(k: Int, rowConditions: Array<IntArray>, colConditions: Array<IntArray>): Array<IntArray> {
        val rowOrder = topologicalSort(rowConditions, k)
        val colOrder = topologicalSort(colConditions, k)
        if (rowOrder.size == 0 || colOrder.size == 0) {
            return emptyArray()
        }
        val matrix = Array(k) { IntArray(k) }
        val colMap = colOrder.mapIndexed { index, num -> num to index }.toMap()
        for ((row, num) in rowOrder.withIndex()) {
            matrix[row][colMap[num]!!] = num
        }
        return matrix
    }
}
```