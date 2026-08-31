# Simple recursive solution

**Author:** romakost29
**Votes:** 0
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/5685937/](https://leetcode.com/problems/univalued-binary-tree/solutions/5685937/)

---

# Approach
The key moment of the algorithm is comparing the previous node's value with the current node's value. Therefore, we add the previous node's value as an argument to the method and call this method recursively for the left and right child of the tree.

# Complexity
O(n)


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
    fun isUnivalTree(root: TreeNode?): Boolean {
        return dfs(root, root!!.`val`) 
    }

    fun dfs(root: TreeNode?, prev: Int): Boolean {
        if (root == null) return true
        if (root.`val` != prev) return false
        return !(!dfs(root.left, root.`val`) || !dfs(root.right, root.`val`))
    } 
}
```