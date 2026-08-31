# Elegant Kotlin solution, beats 100%

**Author:** paulashis0013
**Votes:** 0
**Link:** [https://leetcode.com/problems/tree-diameter/solutions/2355387/](https://leetcode.com/problems/tree-diameter/solutions/2355387/)

---



```kotlin
class Solution {
    val height = mutableMapOf<Int, Int>()
    
    fun hdfs(u: Int, par: Int, graph: List<MutableList<Int>>): Int {
        height[u] = graph[u].filter{it != par}.map{hdfs(it, u, graph)}.fold(-1){a, b -> maxOf(a, b)} + 1
        return height[u]!!
    }
    
    fun ddfs(u: Int, par: Int, graph: List<MutableList<Int>>): Int {
        val children = graph[u].filter{it != par}
        if (children.size == 0) return 0
        if (children.size == 1) return maxOf(ddfs(children[0], u, graph), (height[children[0]] ?: 0) +1)
        return maxOf(
            children.map{ddfs(it, u, graph)}.fold(0){a, b -> maxOf(a, b)},
            children.map{height[it] ?: 0}.sortedDescending().let{it[0] + it[1] + 2}
        )
    }

    fun treeDiameter(edges: Array<IntArray>): Int {
        val graph = (0 .. edges.size).map{mutableListOf<Int>()}
        for (e in edges) {
            graph[e[0]].add(e[1])
            graph[e[1]].add(e[0])
        }
        hdfs(0, -1, graph)
        return ddfs(0, -1, graph)
    }
}
```