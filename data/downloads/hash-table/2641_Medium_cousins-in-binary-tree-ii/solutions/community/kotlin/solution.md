# Simple Kotlin solution, beats 100% by run time

**Author:** user7581dN
**Votes:** 1
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree-ii/solutions/5955121/](https://leetcode.com/problems/cousins-in-binary-tree-ii/solutions/5955121/)

---

# Overview
Short and simple code, no extra data structures except the list for BFS.

# Approach
Use a `LinkedList` for BFS traversal. At each level, do two passes through all nodes of the current level:
1. calculate the total sum of all their children;
2. calculate the sum of each node's children, subtract it from the total sum, and replace both children's value with the result.

# Code
```kotlin []
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
    fun replaceValueInTree(root: TreeNode?): TreeNode? {
        val nodes = LinkedList<TreeNode>()
        nodes.offer(root!!)
        root.`val` = 0
        while (nodes.isNotEmpty()) {
            val sum = nodes.sumOf { (it.left?.`val` ?: 0) + (it.right?.`val` ?: 0) }
            repeat(nodes.size) {
                val parent = nodes.poll()
                val localSum = sum - (parent.left?.`val` ?: 0) - (parent.right?.`val` ?: 0)
                parent.left?.let {
                    it.`val` = localSum
                    nodes.offer(it)
                }
                parent.right?.let {
                    it.`val` = localSum
                    nodes.offer(it)
                }
            }
        }
        return root
    }
}
```