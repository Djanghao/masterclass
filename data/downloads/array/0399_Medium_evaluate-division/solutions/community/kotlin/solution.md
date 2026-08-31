# [Kotlin] BFS minimalist solution

**Author:** SamoylenkoDmitry
**Votes:** 2
**Link:** [https://leetcode.com/problems/evaluate-division/solutions/1993951/](https://leetcode.com/problems/evaluate-division/solutions/1993951/)

---

1. Build graph. Any path in the graph will result like production of edge values: a/c = a/b * b/c
2. Just BFS from start to finish for each query


```
class Solution {
    data class Edge(val s:String, val v:Double)
    fun calcEquation(equations: List<List<String>>, values: DoubleArray, queries: List<List<String>>): DoubleArray {
       val fromTo = mutableMapOf<String,MutableList<Edge>>()
       equations.forEachIndexed{i,e->
           fromTo.getOrPut(e[0]){mutableListOf()}.add(Edge(e[1], values[i]))
           fromTo.getOrPut(e[1]){mutableListOf()}.add(Edge(e[0], 1/values[i]))
       } 
       return DoubleArray(queries.size){i->
           val queue = ArrayDeque<Edge>()
           val visited = mutableSetOf<String>()
           queue.add(Edge(queries[i][0],1.0))
           while(queue.isNotEmpty()) {
               repeat(queue.size) {
                   val fromEdge = queue.poll()
                   val edges = fromTo[fromEdge.s]?:return@DoubleArray -1.0
                   if(fromEdge.s==queries[i][1]) return@DoubleArray fromEdge.v
                   edges.asSequence()
                        .filter{visited.add(it.s)}
                        .map{Edge(it.s, fromEdge.v*it.v)}
                        .toCollection(queue)
               }
           }
           -1.0
       }
    }
}
```