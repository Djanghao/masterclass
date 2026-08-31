# Kotlin | DFS | HashMap

**Author:** Atrilos
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-tree-right-side-view/solutions/4066334/](https://leetcode.com/problems/binary-tree-right-side-view/solutions/4066334/)

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
    fun rightSideView(root: TreeNode?): List<Int> {
        val map = mutableMapOf<Int, Int>()
        dfs(root, 0, map)
        return map.values.toList()
    }

    fun dfs(root: TreeNode?, depth: Int, map: MutableMap<Int, Int>) {
        root ?: return
        map[depth] = root.`val`
        dfs(root.left, depth + 1, map)
        dfs(root.right, depth + 1, map)
    }
}
```