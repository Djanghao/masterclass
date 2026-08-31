# Fastest Kotlin submission

**Author:** raipc
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-duplicate-subtrees/solutions/3241332/](https://leetcode.com/problems/find-duplicate-subtrees/solutions/3241332/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n^2)$$ for map keys

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
    fun findDuplicateSubtrees(root: TreeNode?): List<TreeNode?> {
        fun traverse(node: TreeNode?, result: MutableList<TreeNode>, counter: HashMap<String, Int>): String {
            if (node == null) return ""
            val left = traverse(node.left, result, counter)
            val right = traverse(node.right, result, counter)
            return ("" + node.`val` + "L" + left + "R" + right)
                .also { if (counter.compute(it) { _, prev -> (prev?:0) + 1 } == 2) result += node }
        }
        return mutableListOf<TreeNode>().apply { traverse(root, this, hashMapOf()) }
    }
}
```