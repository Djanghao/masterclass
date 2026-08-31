# Kotlin DFS

**Author:** Karim_Ibrahim
**Votes:** 2
**Link:** [https://leetcode.com/problems/leaf-similar-trees/solutions/4071113/](https://leetcode.com/problems/leaf-similar-trees/solutions/4071113/)

---

# Complexity
- Time complexity:
$$O(T1 + T2)$$

- Space complexity:
$$O(T1 + T2)$$
Number of leaves in a full tree = (n + 1) / 2 where n is the total number of nodes in the tree (including leaves).

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
    fun leafSimilar(root1: TreeNode?, root2: TreeNode?): Boolean {
       val leaves1 = mutableListOf<Int>()
       leafNodes(root1, leaves1)
       val leaves2 = mutableListOf<Int>()
       leafNodes(root2, leaves2)

       return leaves1 == leaves2
    }

    fun leafNodes(root: TreeNode?, accum: MutableList<Int>) {
        if(root == null) return
        if(root.left == null && root.right == null) accum += root.`val`
        leafNodes(root.left, accum)
        leafNodes(root.right, accum)
    }
}
```