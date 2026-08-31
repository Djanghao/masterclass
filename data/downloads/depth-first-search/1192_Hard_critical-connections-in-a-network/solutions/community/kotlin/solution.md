# Step by step explanation.

**Author:** 2pac_shakur
**Votes:** 5
**Link:** [https://leetcode.com/problems/critical-connections-in-a-network/solutions/824214/](https://leetcode.com/problems/critical-connections-in-a-network/solutions/824214/)

---

All credits to 
1. [WilliamFiset YT bridges & articulation points](https://bit.ly/32L2KHT)
2. [HackerEarth article](https://bit.ly/3gSluKF)
3. CLRS.

**Lets represent a vertex in graph**

```
    data class Vertex(val id: Int,  
                      var d: Int = 0,  // discovered time
                      var low: Int = Int.MAX_VALUE, // earliest discovered time
                      var parent: Int = -1, 
                      var visited: Boolean = false,
                      var articulationPoint: Boolean = false) // is this vertex articulation point ?
```

**Lets represent a graph**
```
    class Graph(val n: Int) {
        
        val vertices = Array(n) { i -> Vertex(i) } // store all vertices in array, initialise id of vertex with array index
        
        val adjList = Array(n) { LinkedList<Vertex>() } // adj list - array of linkedlist
        
        fun addEdge(from: Int, to: Int) { 
            val (f, t) = vertices[from] to vertices[to] // Vertex objects f and t to be added to adjList
            adjList[from].add(t) // add both since it is a un-directed graph
            adjList[to].add(f)  // add both since it is a un-directed graph
        }
    }
```


**Lets build graph with list of connections**
```
    private fun buildGraph(n: Int, connections: List<List<Int>>): Graph {
        val graph = Graph(n)
        connections.forEach { path ->
            val (from, to) = path[0] to path[1]
            graph.addEdge(from, to)
        }
        return graph
    }
```

**Handling low : crucial part of this problem**
For an edge u to v during dfs traversal,
Case 1 : If v is not visited yet, then u's low would be the minimum of u and v.
Case 2 : Else if v is visited already and v is not u's parent, that means there is a back edge from v to reach u (there is a cycle).
			 then u's low would be min of u's low and v's discover time (since v might have discovered before)
```
	if (v.visited.not()) {
		u.low = minOf(u.low, v.low)
	} else if (u.parent != v.id) {
		u.low = minOf(u.low, v.d)
	}
```

**Info : articulation point**
A vertex of Graph is an articulation point whose removal disconnects the graph.
Also known as *cut-vertex/weak-point/vulnerability.*
**For an edge u to v ->**, "u" is an articulation point if
Case 1 : If u is a root/it's parent is null and u has more than 1 child
Case 2 : If u has a parent and v.low >= u.d
```
	if (u.parent == -1 && child > 1) {
		u.articulationPoint = true
	} else if (u.parent != -1 && v.low >= u.d) {
		u.articulationPoint = true
	}
```

**Info : Bridge**
A vertex of Graph is a bridge whose removal disconnects the graph.
Also known as *critical-connection/weak-link.*
**For an edge u to v ->**  if v vertex has discovery time strictly greater than that of u, then is a Bridge 
```
	if (v.low > u.d) bridges.add(listOf(u.id, v.id))
```


**Lets DFS combining bridge and articulation point**
```
    private fun dfs(u: Vertex, graph: Graph) {
        time++
        u.d = time
        u.low = time
        u.visited = true
        var child = 0
        for (v in graph.adjList[u.id]) {
            if (v.visited.not()) {
                child++
                v.parent = u.id    
                dfs(v, graph)
                u.low = minOf(u.low, v.low)
                if (u.parent == -1 && child > 1) {
                    u.articulationPoint = true
                } else if (u.parent != -1 && v.low >= u.d) {
                    u.articulationPoint = true
                }
                if (v.low > u.d) bridges.add(listOf(u.id, v.id))
            } else if (u.parent != v.id) {
                u.low = minOf(u.low, v.d)
            }
        }
    }
```

## Putting it all together
<details><summary>Full code</summary>
<p>

```
   
    data class Vertex(val id: Int, 
                      var d: Int = 0, 
                      var low: Int = Int.MAX_VALUE, 
                      var parent: Int = -1, 
                      var visited: Boolean = false,
                      var articulationPoint: Boolean = false)
    
    class Graph(val n: Int) {
        
        val vertices = Array(n) { i -> Vertex(i) }
        
        val adjList = Array(n) { LinkedList<Vertex>() }
        
        fun addEdge(from: Int, to: Int) {
            val (f, t) = vertices[from] to vertices[to]
            adjList[from].add(t)
            adjList[to].add(f)
        }
    }
    
    var time = 0
    val bridges = ArrayList<List<Int>>()
    
    fun criticalConnections(n: Int, connections: List<List<Int>>): List<List<Int>> {
        val graph = buildGraph(n, connections)    
        graph.vertices.forEach {
            if (it.visited.not()) dfs(it, graph)
        }
        return bridges
    }
    
    private fun dfs(u: Vertex, graph: Graph) {
        time++
        u.d = time
        u.low = time
        u.visited = true
        var child = 0
        for (v in graph.adjList[u.id]) {
            if (v.visited.not()) {
                child++
                v.parent = u.id    
                dfs(v, graph)
                u.low = minOf(u.low, v.low)
                if (u.parent == -1 && child > 1) {
                    u.articulationPoint = true
                } else if (u.parent != -1 && v.low >= u.d) {
                    u.articulationPoint = true
                }
                if (v.low > u.d) bridges.add(listOf(u.id, v.id))
            } else if (u.parent != v.id) {
                u.low = minOf(u.low, v.d)
            }
        }
    }
    
    private fun buildGraph(n: Int, connections: List<List<Int>>): Graph {
        val graph = Graph(n)
        connections.forEach { path ->
            val (from, to) = path[0] to path[1]
            graph.addEdge(from, to)
        }
        return graph
    }
```
</p>
</details>