# Kotlin Dijkstra Algorithm using Priority Queue

**Author:** gob1nd
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/3648343/](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/3648343/)

---

# Code
```
class Solution {
    private data class Node(
        val t: Int,
        val f: Int,
        val d: Int
    )
    private fun inBounds(i: Int, j: Int, n: Int, m: Int): Boolean {
        return i in 0 until n && j in 0 until m
    }
    private var graph: MutableList<MutableList<Node>> = mutableListOf()
    private lateinit var grid: Array<IntArray>
    private fun createGraph() {
        val n = grid.size
        val m = grid[0].size
        graph = MutableList<MutableList<Node>>(n * m) {
            mutableListOf<Node>()
        }
        for (i in 0 until n) {
            for (j in 0 until m) {
                val node = i * m + j
                for (value in 1..4) {
                    if (value == 1) {
                        createEdge(node, i, j+1, n, m, value, grid[i][j])
                    } else if (value == 2) {
                        createEdge(node, i, j-1, n, m, value, grid[i][j])
                    } else if (value == 3) {
                        createEdge(node, i+1, j, n, m, value, grid[i][j])
                    } else {
                        createEdge(node, i-1, j, n, m, value, grid[i][j])
                    }
                }
            }
        }
    }
    private fun createEdge(node: Int, i: Int, j: Int, n: Int, m: Int, value: Int, gVal: Int) {
        if (inBounds(i, j, n, m)) {
            val next = i * m + j
            graph[node].add(
                Node(
                    next,
                    node,
                    1.takeIf { value != gVal } ?: 0
                )
            )
        }
    }
    fun minCost(grid: Array<IntArray>): Int {
        this.grid = grid
        createGraph()
        val pq: PriorityQueue<Node> = PriorityQueue(compareBy { it.d })
        pq.add(Node(0, 0, 0))
        val n = grid.size
        val m = grid[0].size
        val dist: MutableList<Int> = MutableList(n * m) { Int.MAX_VALUE }
        dist[0] = 0
        while (pq.isNotEmpty()) {
            val node = pq.poll()
            for (v in graph[node.t]) {
                if (dist[v.t] > dist[v.f] + v.d) {
                    dist[v.t] = dist[v.f] + v.d
                    pq.add(v)
                }
            }
        }
        return dist[n * m - 1]
    }
}
```