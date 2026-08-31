# Centroids search. Two approaches.

**Author:** drgavrikov
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-height-trees/solutions/5064427/](https://leetcode.com/problems/minimum-height-trees/solutions/5064427/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

**Approach 1.** The solution involves finding the [centroid](https://en.wikipedia.org/wiki/Centered_tree) of the tree. The centroid of a tree is a vertex with the minimum sum of distances to all other vertices of the tree. There can be one or two centroids in a tree.

In each iteration of the algorithm, we remove the leaf vertices and update the degrees of the remaining vertices. We continue this process while the count of remaining vertices in the tree is more than two. We return the remaining one or two vertices as the result.

This approach is based on the idea that removing the leaf vertices gradually brings us closer to the centroids, as the vertices farther away from the center of the tree are removed.

![image.png](./images/0.png)


**Approach 2.** This solution finds the centroids of a tree using BFS to compute distances between vertices and the diameter of the tree.

To find one of the tree centroids, the first BFS is performed from any vertex to find the furthest vertex, denoted as $source$. After finding the vertex $source$, a second BFS is conducted from $source$ to find the second furthest vertex, denoted as $sink$. The diameter of the tree is defined as the distance between vertices $source$ and $sink$. Vertices whose sum of distances to $source$ and $sink$ equals the diameter, and whose minimum distance to $source$ and $sink$ is greater than or equal to half the diameter, are considered centroids of the tree. Such vertices comprise the result.

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n + m)$ additional memory
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


```Kotlin_Approach1 []
class Solution {
    fun findMinHeightTrees(n: Int, edges: Array<IntArray>): List<Int> {
        if (n == 1) return listOf(0)

        val degrees = IntArray(n) {0}
        val graph = Array(n) { mutableListOf<Int>() }

        edges.forEach { (from, to) ->
            graph[from].add(to)
            graph[to].add(from)

            degrees[from]++
            degrees[to]++
        }

        val leaves: Deque<Int> = LinkedList<Int>()
        degrees.forEachIndexed { vertex, degree -> if (degree == 1) leaves.add(vertex) }

        var remainingVertexes = n
        while (remainingVertexes > 2) {
            val size = leaves.size
            repeat(size) {
                val leaf = leaves.removeFirst()
                graph[leaf].forEach { vertex -> 
                    degrees[vertex]--
                    if (degrees[vertex] == 1) leaves.addLast(vertex)
                }
            }
            remainingVertexes -= size
        }

        return leaves.toList()
    }
}
```
```Kotlin_Approach2 []
class Solution {
    private fun bfs(tree: Array<MutableList<Int>>, source: Int): List<Int> {
        val distances = Array(tree.size) { Int.MAX_VALUE }
        distances[source] = 0
        val queue = LinkedList<Int>()
        queue.addLast(source)
        while (queue.isNotEmpty()) {
            val vertex = queue.removeFirst()
            tree[vertex].forEach { next ->
                if (distances[next] > distances[vertex] + 1) {
                    distances[next] = distances[vertex] + 1
                    queue.addFirst(next)
                }
            }
        }
        return distances.toList()
    }

    fun findMinHeightTrees(n: Int, edges: Array<IntArray>): List<Int> {
        if (n == 1) return listOf(0)

        val tree = Array(n) { mutableListOf<Int>() }
        edges.forEach { (from, to) ->
            tree[from].add(to)
            tree[to].add(from)
        }
        val distance = bfs(tree, 0)
        val source = distance.indexOf(distance.maxOf { it })
        val distance1 = bfs(tree, source)
        val sink = distance1.indexOf(distance1.maxOf { it })
        val distance2 = bfs(tree, sink)

        val diameter = distance2.maxOf { it }

        val result = mutableListOf<Int>()
        (0 until n).forEach { vertex ->
            if (distance1[vertex] + distance2[vertex] == diameter && min(distance1[vertex], distance2[vertex]) >= diameter / 2)
                result.add(vertex)
        }
        return result.toList()
    }
}

```
