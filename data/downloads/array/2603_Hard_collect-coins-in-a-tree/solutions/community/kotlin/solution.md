# Kotlin, trim, clean and short, 92 ms

**Author:** user7581dN
**Votes:** 0
**Link:** [https://leetcode.com/problems/collect-coins-in-a-tree/solutions/5991010/](https://leetcode.com/problems/collect-coins-in-a-tree/solutions/5991010/)

---

# Approach
First, obviously, we need to build an adjacency list for each vertex. More precisely, using an array of sets for performance reasons.

Next, we trim all coinless leaves. Since adjacency is stored in an array, we don't remove any vertices completely, but remove the edges from adjacency sets.
Also, to avoid iterating over all vertices repeatedly, we keep trimming the branch if removing a coinless leaf produces another coinless leaf.
While trimming, we keep track of the remaining vertices number.

Finally, we trim all remaining leaves. Again, instead of doing the whole loop twice, we immediately check if the neighbor vertex would become a leaf after removing the current one. If yes, we count it as trimmed as well.
Note that here we don't need to actually adjust all adjacency sets, rather we need to count the remaining vertices.

There are some edge cases when we can end up with a negative answer because all vertices have been removed. To address that, we set the lower bound of zero.

# Complexity
- Time complexity:
$$O(n)$$ to iterate over all vertices several times.

- Space complexity:
$$O(n)$$ to store the adjacency lists.

# Code
```kotlin []
class Solution {
    fun collectTheCoins(coins: IntArray, edges: Array<IntArray>): Int {
        val n = coins.size
        val graph = Array(n) { HashSet<Int>() }
        for ((a, b) in edges) {
            graph[a].add(b)
            graph[b].add(a)
        }

        var count = n
        for (v in 0 until n) {
            var u = v
            var g = graph[u]
            while (coins[u] == 0 && g.size == 1) {
                val t = g.first()
                g.clear()
                g = graph[t]
                g.remove(u)
                u = t
                count--
            }
        }

        for (v in 0 until n) {
            var g = graph[v]
            if (g.size == 1) {
                val t = g.first()
                g = graph[t]
                count--
                if (g.size == 2) count-- else g.remove(v)
            }
        }

        return max(count - 1 shl 1, 0)
    }
}
```