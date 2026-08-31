# Kotlin Solution With Comments. No Code Golf!

**Author:** kevinh287
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/5023588/](https://leetcode.com/problems/maximum-average-subtree/solutions/5023588/)

---

See inline comments

# Code
```
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun maximumAverageSubtree(root: TreeNode?): Double {
        // See explanation in `averageTraversal` method.
        return root?.let { averageTraversal(it).highestAverage } ?: 0.0
    }

    private fun averageTraversal(root: TreeNode): AverageResult {
        // Strategy: Bottom-up recursive approach that accumulates for a subtree:
        // 1. The number of nodes
        // 2. The sum of nodes
        // 3. The highest average encountered within the subtree.

        // Depth-first traversal of the left and right subtrees.
        val left = root.left?.let { averageTraversal(it) }
        val right = root.right?.let { averageTraversal(it) }

        // The total number of nodes in the subtree at `root` is the count of the left tree's nodes,
        // the right tree's nodes, and this node.
        val nodeCount = (left?.nodeCount ?: 0) + (right?.nodeCount ?: 0) + 1

        // Similarly, the sum of all nodes in the subtree at `root` is the sum of the left tree's nodes,
        // the right tree's nodes, and this node.
        val total = (left?.total ?: 0) + (right?.total ?: 0) + root.`val`

        val average = total.toDouble() / nodeCount
        return AverageResult(
            total = total,
            nodeCount = nodeCount,
            // The highest average may not be the one at this node! Instead, return the highest of the 
            // current average and the two averages from the left and right subtrees.
            highestAverage = maxOf(average, left?.highestAverage ?: 0.0, right?.highestAverage ?: 0.0)
        )
    }

    /**
     * Metadata accumulated about a subtree from a traversal of its nodes.
     * @property total: The total value of all nodes in the subtree
     * @property nodeCount: The total number of nodes in the subtree
     * @property highestAverage: The highest average value of some subtree of the subtree.
     */
    data class AverageResult(val total: Int, val nodeCount: Int, val highestAverage: Double)
}
```