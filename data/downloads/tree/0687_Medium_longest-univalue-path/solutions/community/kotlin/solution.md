# Kotlin DFS solution

**Author:** d1d
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-univalue-path/solutions/4585829/](https://leetcode.com/problems/longest-univalue-path/solutions/4585829/)

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
    fun longestUnivaluePath(root: TreeNode?): Int {
        var result = 0
        fun dfs (node : TreeNode?) : Int {
            if (node == null) return 0
            val left = dfs(node.left) 
            val right = dfs(node.right)
            val ll = if (node.left?.`val` == node.`val`) left else 0
            val rl = if (node.right?.`val` == node.`val`) right else 0
            result = maxOf(result, ll + rl)
            return maxOf(ll, rl) + 1
        }
        dfs(root)
        return result
    }
}
```