# BFS simple logic - Time: O(n), Space: O(n)

**Author:** caroltr
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/5463074/](https://leetcode.com/problems/check-completeness-of-a-binary-tree/solutions/5463074/)

---

# Intuition
Once we find a null child, next nodes can't have any children and should be end of the Tree.

# Approach
BFS with a flag identifying when we found a null child, meaning that if we find another child, the tree is not complete

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

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
    fun isCompleteTree(root: TreeNode?): Boolean {
        root ?: return false
        return bfs(root)
    }

    fun bfs(root: TreeNode) : Boolean{
        val queue: Queue<TreeNode> = LinkedList()
        queue.offer(root)

        var stop = false
        while (queue.isNotEmpty()) {
            val node = queue.poll()

            if (node.left != null) {
                if (stop) return false
                queue.offer(node.left)
            } else {
                stop = true
            }

            if (node.right != null) {
                if (stop) return false
                queue.offer(node.right)
            } else {
                stop = true
            }
        }

        return true
    }
}
```