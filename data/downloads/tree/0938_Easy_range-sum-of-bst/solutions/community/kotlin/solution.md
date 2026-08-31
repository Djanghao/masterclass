# Kotlin. 1-line solution.

**Author:** ramanchik
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-sum-of-bst/solutions/4527312/](https://leetcode.com/problems/range-sum-of-bst/solutions/4527312/)

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
    fun rangeSumBST(r: TreeNode?, l: Int, h: Int): Int = r?.let { rangeSumBST(r.left, l, h) + rangeSumBST(r.right, l, h) + if(it.`val` < l || it.`val` > h) 0 else it.`val` } ?: 0
}
```