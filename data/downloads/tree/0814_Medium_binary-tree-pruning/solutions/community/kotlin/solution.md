# Runtime: faster than 100.00%  || Memory Usage: less than 100.00%

**Author:** ahmed7elsawy
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/2807889/](https://leetcode.com/problems/binary-tree-pruning/solutions/2807889/)

---

class Solution {
    
	fun pruneTree(root: TreeNode?): TreeNode? {
        root?.let { dfs(it) }
        if (root?.`val` == -1) return null
        return root
    }

    private fun dfs(root: TreeNode) {
        root.left?.let { dfs(it) }
        root.right?.let { dfs(it) }
        if (root.left?.`val` == -1) {
            root.left = null
        }
        if (root.right?.`val` == -1) {
            root.right = null
        }
        if ((root.left == null || root.left?.`val` == -1) 
            && (root.right == null || root.right?.`val` == -1)
            && root.`val` == 0) {
            root.`val` = -1
        }
    }
	
}