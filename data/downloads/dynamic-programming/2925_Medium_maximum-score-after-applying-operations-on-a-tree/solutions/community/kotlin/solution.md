# Simple Recursion

**Author:** lifran
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4257283/](https://leetcode.com/problems/maximum-score-after-applying-operations-on-a-tree/solutions/4257283/)

---

# Reframe the problem
We can reframe the question to this equivalent problem:
Find the minimum sum of node values, if we pick one node for each path from root to leaf. 

(**Note**: The problem statement guarantees at least 2 nodes in the tree, so we don't have to worry about edges cases of an empty tree, or a tree with just one node.)

If we solve this reframed problem with solution value `minSum`, then the solution to the original problem is `sum(values) - minSum`.

# Intuition
For any tree `t`, to satisfy the `pick one node for each path` part of the reframed proble, we can either pick the root of `t`, or we pick nodes in each subtree of `t` that satisfy the `each path` condition.

To make our choice minimal, we compare the value of the root node to the sum of values of nodes we would pick in each subtree. We choose whichever value is smaller.

# Approach
We prepare an edge map indexed by node id that will make it easier for us to traverse our tree recursively. Since our tree is undirected, we also keep track of already visited nodes to avoid accidentally cycling back.

For each tree, we compare the value of the root node to the sum of values of each subtree, and return the smaller value.

For leaves, where the sum of values for each subtree comes out to zero, we just return the node value.

# Complexity
- Time complexity:
We traverse each node of the tree -> O(`#nodes`)

- Space complexity:
We create a more convenient edge map -> O(`#nodes`)

# Kotlin
```
import java.util.*

class Solution {
    private fun minCut(node: Int, edges: Array<LinkedList<Int>>, values: IntArray, seen: BooleanArray): Long {
        var subtractedSum = 0L

        seen[node] = true

        for (v in edges[node]) {
            if (seen[v]) continue

            subtractedSum += minCut(v, edges, values, seen)
        }

        return if (subtractedSum > 0 && subtractedSum < values[node]) subtractedSum else values[node].toLong()
    }

    fun maximumScoreAfterOperations(edges: Array<IntArray>, values: IntArray): Long {
        val outEdges = Array(values.size) { LinkedList<Int>() }

        for ((a, b) in edges) {
            outEdges[a].add(b)
            outEdges[b].add(a)
        }

        return values.map(Int::toLong).sum() - minCut(0, outEdges, values, BooleanArray(values.size))
    }
}
```