# Easy solution

**Author:** Deacle
**Votes:** 0
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/5639756/](https://leetcode.com/problems/deepest-leaves-sum/solutions/5639756/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
    var sum = 0

    fun deepestLeavesSum(root: TreeNode?): Int {
        val length = length(root)
        dfs(root, length, 1)
        return sum
    }

    fun dfs(root: TreeNode?, deepLen: Int, len: Int) {
        if (root == null) return
        if (len == deepLen) sum += root.`val`
        if (root.left != null) dfs(root.left, deepLen, len + 1)
        if (root.right != null) dfs(root.right, deepLen, len + 1)
    }

    fun length(root: TreeNode?): Int {
        if (root == null) return 0
        return 1 + maxOf(length(root.left), length(root.right))
    }
}
```