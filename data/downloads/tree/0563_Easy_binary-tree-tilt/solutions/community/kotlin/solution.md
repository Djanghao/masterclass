# Kotlin Solution

**Author:** Kuba111
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-tilt/solutions/3692821/](https://leetcode.com/problems/binary-tree-tilt/solutions/3692821/)

---


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
import kotlin.math.abs

class Solution {
    fun findTilt(root: TreeNode?): Int {
        val list = ArrayList<Int>()
        helper(root, list)
        return list.sum()
    }

    private fun helper(root: TreeNode?, list: ArrayList<Int>) {
        var leftSubtreeSum = 0
        var rightSubtreeSum = 0
        if (root?.left != null) {
            leftSubtreeSum = sumOfAllElements(root.left!!)
        }
        if (root?.right != null) {
            rightSubtreeSum = sumOfAllElements(root.right!!)
        }
        list.add(abs(leftSubtreeSum - rightSubtreeSum))
        if (root != null) {
            helper(root.right, list)
        }
        if (root != null) {
            helper(root.left, list)
        }
    }

    private fun sumOfAllElements(root: TreeNode): Int {
        var sum = 0
        sum += root.`val`
        if (root.left != null) {
            sum += sumOfAllElements(root.left!!)
        }
        if (root.right != null) {
            sum += sumOfAllElements(root.right!!)
        }
        return sum
    }
}
```