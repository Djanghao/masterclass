# multiple solutions with detailed explanation

**Author:** Davidcalle3141
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/897841/](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/solutions/897841/)

---

```
/*
* Will be going over two solutions the first we are goint to detect loops in a graph. it sounds complicated but its really simple
* the reason i would go with this method in an interview is because it allows you to leverage all the information given my second method is a dfs similar
* to islands in a matrix but it doesn not leverage the n we are give
* 
* the idea behind the firs solution is that for any graph of v Vertices we have v - 1 edges
* so if simply subtract the number of edges from the number of vertices we get the number of unique components
* for example if we have two components with edges [1, 2], [2,4] and [5,6][6,7] the number of Vertices is 6 and number of edges is 4 
* this will always ring true except for one circumstance that is a loop
* 
*           1
*          / \\
*         2 - 3
* 
* as seen above the number of edges == number of Vertices
* in order to get around this we keep track of the parent of every node and if we are adding an edge where both
* Vertices share a parent we found our extra edge
* 
* */


val parentMap = hashMapOf<Int,Int>()
fun countComponents(n: Int, edges: Array<IntArray>): Int {
    var uniqueEdges = 0 // a count of our edges that dont close a loop
    edges.forEach {
        val root1 = findParent(it[0])//find the parent of one vertex
        val root2 = findParent(it[1])//find parent of the other
        if(root1 != root2){// if the dont share a parent cool lets connect them
            parentMap[root1] = root2 // we connect them by making one vertex the parent of the other
            uniqueEdges++ // increment our unique edges
        }
    }
    return n - uniqueEdges // our answer
}

fun findParent(node: Int): Int {
    val parent = parentMap[node] ?: return node //if we have a parent get it if not just return the node
    //below we perform a dfs to find the "root" parent and set our nodes parent to that parent
    parentMap[node] = parentLookup(parentMap, parent) 
    //return parent
    return parentMap[node] ?: node

}

/*
* my second approach the one i most likely would think of first in an interview
* its simple we map all the adjacent edges bi directionally so when we enter our graph through any node we can reach all other nodes
* 
* we iterate through every vertex if it hasnt been visited we found an entry into a graph increase our componentCount and mark all its nodes as visited
* do this for all Vertices and we are done
* 
* */

val adjacencyList = hashMapOf<Int, ArrayList<Int>>()
val visitedV = hashSetOf<Int>()
fun countComponentsDFS(n: Int, edges: Array<IntArray>): Int {
    var componentcount = 0

    edges.forEach {
        var edge = adjacencyList.getOrDefault(it[0], arrayListOf())
        edge.add(it[1])
        adjacencyList[it[0]] = edge

        edge = adjacencyList.getOrDefault(it[1], arrayListOf())
        edge.add(it[0])
        adjacencyList[it[1]] = edge
    }

    adjacencyList.keys.forEach {
        if(!visitedV.contains(it)){
            componentcount++
            ccDFS(it)
        }
    }

    return componentcount

}

fun ccDFS(vertex : Int){
    if(!visitedV.contains(vertex)){
        visitedV.add(vertex)
        val adjacent = adjacencyList[vertex]
        adjacent?.forEach { ccDFS(it)}
    }
}
```