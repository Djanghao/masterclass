# Kotlin | BFS | O(n)

**Author:** IrregularOne
**Votes:** 0
**Link:** [https://leetcode.com/problems/frog-position-after-t-seconds/solutions/5506165/](https://leetcode.com/problems/frog-position-after-t-seconds/solutions/5506165/)

---

# Kotlin
```
class Solution {
    fun frogPosition(n: Int, edges: Array<IntArray>, t: Int, target: Int): Double {
        if (n == 1) return 1.0
        
        val tree = Array<ArrayList<Int>?>(n + 1) { null }
        val probabilityMap = DoubleArray(n + 1)
        probabilityMap[1] = 1.0

        for ((a, b) in edges) {
            if (tree[a] == null) tree[a] = ArrayList()
            if (tree[b] == null) tree[b] = ArrayList()

            tree[a]!!.add(b)
            tree[b]!!.add(a)
        }

        val queue = LinkedList<Pair<Int, Int>>()
        queue.add(0 to 1)

        var seconds = 0

        while (queue.isNotEmpty() && seconds < t) {
            repeat (queue.size) {
                val (from, node) = queue.poll()
                val probability = probabilityMap[node]

                val children = tree[node]!!
                val childrenCount = if (node == 1) children.size else children.size - 1

                if (childrenCount > 0) {
                    val childProbability = probability / childrenCount

                    for (childNode in children) {
                        if (childNode == from) continue

                        queue.add(node to childNode)
                        probabilityMap[childNode] = childProbability
                    }

                    probabilityMap[node] = 0.0
                }
            }
            seconds++
        }

        return probabilityMap[target]
    }
}
```