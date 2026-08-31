# [Kotlin] Union Find | DFS

**Author:** jeppeman
**Votes:** 0
**Link:** [https://leetcode.com/problems/similar-string-groups/solutions/3462878/](https://leetcode.com/problems/similar-string-groups/solutions/3462878/)

---

# Intuition
We can form a graph with bidirectional connections between words that are similar and get the number of groups by a DFS or disjoint set union approach.

# Approach
1. Declare a subroutine that determines whether two strings are similar by calculating the diff between them; if it exceeds 2 they are not.
2. Create an an adjanceny from the input based on step 1.
3. Create a UnionFind data structure
4. Declare a nGroups variable initiated at the size of the input
5. Loop through the adjacency list, for each edge:
  i) Run UnionFind.find on the nodes that form the edge
  ii) If they don't share parents, run UnionFind.union on them and decrement nGroups
6. Return nGroups

# UnionFind with union by rank and path compression
```
class Solution {
    fun numSimilarGroups(strs: Array<String>): Int {
        val adjList = strs.adjacencyList()
        val uf = UnionFind(strs.size)
        var nGroups = strs.size

        for ((from, to) in adjList) {
            val fromParent = uf.find(from)
            val toParent = uf.find(to)

            if (fromParent != toParent) {
                uf.union(from, to)
                nGroups--
            }
        }

        return nGroups
    }

    class UnionFind(size: Int) {
        val parents = IntArray(size) { i -> i }
        val rank = IntArray(size)

        fun find(node: Int): Int {
            if (parents[node] == node) return node
            parents[node] = find(parents[node])
            return parents[node]
        }

        fun union(from: Int, to: Int) {
            val fromRoot = find(from)
            val toRoot = find(to)

            if (rank[fromRoot] > rank[toRoot]) parents[toRoot] = fromRoot
            else if (rank[fromRoot] < rank[toRoot]) parents[fromRoot] = toRoot
            else {
                rank[fromRoot]++
                parents[toRoot] = fromRoot
            }
        }
    }

    fun Array<String>.adjacencyList(): List<IntArray> {
        val list = mutableListOf<IntArray>()
        for (i in indices) {
            for (j in i + 1 until size) {
                if (this[i] isSimilarTo this[j]) list.add(intArrayOf(i, j))
            }
         }

         return list
    }

    infix fun String.isSimilarTo(other: String): Boolean {
        var diff = 0

        for (i in indices) {
            if (this[i] != other[i]) {
                if (++diff > 2) return false
            }
        }

        return true
    }
}
```

# DFS
```
class Solution {
    fun numSimilarGroups(strs: Array<String>): Int {
        val graph = strs.constructGraph()

        val visited = BooleanArray(strs.size)

        fun dfs(node: Int) {
            if (visited[node]) return
            visited[node] = true

            for (similar in graph[node]) dfs(similar)
        }

        var nGroups = 0
        for (i in graph.indices) {
            if (!visited[i]) {
                nGroups++
                dfs(i)
            }
        }

        return nGroups
    }

    fun Array<String>.constructGraph(): Array<HashSet<Int>> {
        val graph = Array(size) { HashSet<Int>() }
        for (i in indices) {
            for (j in i + 1 until size) {
                if (this[i] isSimilarTo this[j]) {
                    graph[i].add(j)
                    graph[j].add(i)
                }
            }
         }

         return graph
    }

    infix fun String.isSimilarTo(other: String): Boolean {
        var diff = 0

        for (i in indices) {
            if (this[i] != other[i]) {
                if (++diff > 2) return false
            }
        }

        return true
    }
}
```