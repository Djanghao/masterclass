# [Kotlin] Commented solution. Easy to understand.

**Author:** kevinh287
**Votes:** 0
**Link:** [https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/4984067/](https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/4984067/)

---

# Intuition
My first thought was to create the leaf-to-root paths for both nodes and then iterate through them for common elements. I ultimately decided against this option due to the complexities of handling cases where one node was the ancestor of the other.

# Approach
1. Each query is handled in isolation. There may be a solution to memoize paths and share between queries but I didn't attempt it for simplicity.
2. Calculate the depth of each node using log2.
3. Find the greatest-valued ancestor of node and node2 by building the full node-to-root path for one node and then walking through the node-to-root path for the other until a common node is found.
4. Do some math with the depths of node, node2, and the common node

# Code
```
class Solution {
    fun cycleLengthQueries(n: Int, queries: Array<IntArray>): IntArray {
        val results = IntArray(queries.size) { -1 }
        for ((index, query) in queries.withIndex()) {
            val node = query[0]
            val node2 = query[1]
 
            // Calculate node depths
            // Each level (zero indexed) of the three contains the values between 2**n until 2**n+1
            // Level 0 contains 1
            // Level 1 contains 2, 3 (2**1 until 2**2)
            // Level 2 contains 4, 5, 6, 7, (2**2 until 2**3)
            // Therefore, a node's level is floor(log2(node.value))
            val nodeDepth = log2(node)
            val node2Depth = log2(node2)

            // Find the greatest-value ancestor
            val commonNode = commonAncestor(node, node2)
            val commonDepth = log2(commonNode)

            // Depth counts the entire leaf-to-root path but we only care about the depth until
            // the common node. 
            // 1 must be added to account for the common node's presence on the cpath of the cycle.
            results[index] = (nodeDepth - commonDepth) + (node2Depth - commonDepth) + 1
        }
        return results
    }

    /** Returns log2 of an int value, rounding all fractions down to the nearest int. */
    private fun log2(value: Int): Int {
        return floor(log2(value.toDouble())).toInt()
    }

    /**
     * Returns the value of the highest-value common ancestor of [node] and [node2]. 
     */
    private fun commonAncestor(node: Int, node2: Int): Int {
            val higher = maxOf(node, node2)
            val lower = minOf(node, node2)

            // Establish `lower`'s node to root path
            val lowerToRootNodes = mutableSetOf<Int>()
            var curr = lower
            while (curr >= 1) {
                lowerToRootNodes.add(curr)
                curr = curr / 2
            }

            // Find the highest valued node in `higher`'s node-to-root path that is also in `lower`'s path.
            curr = higher
            while (curr >= 1) {
                if (lowerToRootNodes.contains(curr)) {
                    return curr
                }
                curr = curr / 2
            }
            
            // Default to the root of the tree.
            return 1
    }
}
```