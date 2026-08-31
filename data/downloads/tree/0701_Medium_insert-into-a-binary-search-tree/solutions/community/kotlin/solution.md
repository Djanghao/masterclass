# Kotlin answer

**Author:** canerkaseler
**Votes:** 0
**Link:** [https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/5081685/](https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/5081685/)

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
class Solution {
    fun insertIntoBST(root: TreeNode?, `val`: Int): TreeNode? {
        when {
            root == null -> return TreeNode(`val`)
            root.`val` == `val` -> return root
            `val` < root.`val` && root.left == null -> root.left = TreeNode(`val`)
            `val` > root.`val` && root.right == null -> root.right = TreeNode(`val`)
            `val` < root.`val` && root.left != null -> insertIntoBST(root.left, `val`)
            `val` > root.`val` && root.right != null -> insertIntoBST(root.right, `val`)
        }
        return root
    }
}
```