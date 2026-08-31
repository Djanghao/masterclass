# Kotlin Double BFS

**Author:** thomaskatalis
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/5098572/](https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/5098572/)

---

# Intuition
1. Build an adjacency graph
2. Build path for each query[i][0] to query[i][1] using BFS
3. Find closest node from path to query[i][2] using BFS

# Complexity
- Time complexity: O(n x m) n is number of edges, m is number of query
- Space complexity: O(n x m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun closestNode(n: Int, edges: Array<IntArray>, query: Array<IntArray>): IntArray {
        // build graph neighbors
        val graph = MutableList<MutableSet<Int>>(n) {mutableSetOf<Int>()}

        for (edge in edges) {
            val u = edge[0]
            val v = edge[1]

            // we add u and v because the graph is indirectional
            graph[u].add(v)
            graph[v].add(u)
        }

        // calculate shortest path twice. First with the 2 nodes, second with the outside
        // path node

        val answer = IntArray(query.size)
        for (i in 0 until query.size) {
            val queryItem = query[i]
            val u = queryItem[0]
            val v = queryItem[1]
            val target = queryItem[2]

            val path = path(u, v, graph)
           
            answer[i] = closest(path.toSet(), target, graph)

        }

        
        return answer
    }

    private fun path(u: Int, v: Int, graph: List<Set<Int>>): List<Int> {
        val visited = mutableSetOf<Int>()
        val queue = LinkedList<Int>()
        queue.add(u)
        visited.add(u)

        var found = false
        val parent = mutableMapOf<Int, Int>()
        while (queue.isNotEmpty() && !found) {
            val node = queue.poll()
            if (node == v) {
                found = true
                break
            }

            for (neighbor in graph[node]) {
                if (visited.add(neighbor)) {
                    parent[neighbor] = node
                    queue.offer(neighbor)
                }
            }     
        }
        val path = LinkedList<Int>()
        if (found) {
            var currentNode: Int? = v
            while (currentNode != null && currentNode != u) {
                path.addFirst(currentNode)
                currentNode = parent[currentNode]
            }
            path.addFirst(u)
        }


        return path

    }
    

    private fun closest(path: Set<Int>, dest: Int, graph: List<Set<Int>>): Int {
        
        val queue = LinkedList<Int>()
        val visited = mutableSetOf<Int>()
        queue.add(dest)
        visited.add(dest)

        while (queue.isNotEmpty()) {

            val node = queue.poll()
            if (path.contains(node)) {
                return node
            }

            for (neighbor in graph[node]) {
                if (visited.add(neighbor)) {
                    queue.offer(neighbor)
                }
            }
        }
      
        return -1
    }
}
```