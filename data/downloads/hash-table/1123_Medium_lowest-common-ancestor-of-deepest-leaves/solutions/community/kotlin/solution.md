# O(n) reduce to 2 problems

**Author:** AC_Lane
**Votes:** 0
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/5369466/](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/5369466/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
inspired from 1676

# Approach
<!-- Describe your approach to solving the problem. -->
reduce the problem to 2 problems
1. find set of deepest levaes
2. find LCA for the set of deepest levaes

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

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

    fun lca(r: TreeNode?, set: Set<TreeNode>): TreeNode? {
        if (r == null) {
            return r
        }
        if (r in set) {
            return r
        }
        val left = lca(r.left, set)
        val right = lca(r.right, set)

        if (left == null) {
            return right
        }
        if (right == null) {
            return left
        }

        return r
    }

    fun lcaDeepestLeaves(root: TreeNode?): TreeNode? {
        if (root == null) {
            return root;
        }
        // level order traversal
        val q = LinkedList<TreeNode>()
        val map = mutableMapOf<Int, Set<TreeNode>>()
        q.offer(root)
        var level = 0

        while (q.isNotEmpty()) {
            val set = mutableSetOf<TreeNode>()
            val size = q.size
            for (i in 0 until size) {
                val node = q.poll()
                set.add(node)
                if (node!!.left != null) {
                    q.offer(node.left)
                }
                if (node!!.right != null) {
                    q.offer(node.right)
                }
            }

            map[level] = set
            level++
        }
        
        return lca(root, map[level-1]!!)
    }
}
```