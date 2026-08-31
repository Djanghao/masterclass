# Kotlin approach without recursion

**Author:** skulagin
**Votes:** 3
**Link:** [https://leetcode.com/problems/diameter-of-binary-tree/solutions/4787628/](https://leetcode.com/problems/diameter-of-binary-tree/solutions/4787628/)

---

# Approach
Simple dfs with stack to store nodes

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

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
    fun diameterOfBinaryTree(root: TreeNode?, current: Int = 0): Int {
        if (root == null) return 0

        val stack = Stack<Pair<TreeNode, Boolean>>() // Pair of node and whether it's processed
        val depths = mutableMapOf<TreeNode?, Int>() // Store depths of nodes
        var diameter = 0

        stack.push(root to false)

        while (stack.isNotEmpty()) {
            val (node, processed) = stack.pop()

            if (processed) {
                val leftDepth = depths.getOrDefault(node.left, 0)
                val rightDepth = depths.getOrDefault(node.right, 0)
                diameter = maxOf(diameter, leftDepth + rightDepth)
                depths[node] = 1 + maxOf(leftDepth, rightDepth)
            } else {
                stack.push(node to true)
                node.right?.let { stack.push(it to false) }
                node.left?.let { stack.push(it to false) }
            }
        }

        return diameter
    }
}
```