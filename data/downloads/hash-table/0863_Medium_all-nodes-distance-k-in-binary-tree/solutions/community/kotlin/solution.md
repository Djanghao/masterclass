# DFS O(1)  space(not including result array)

**Author:** mynameisantik
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/6013058/](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/6013058/)

---

# Intuition
The intuition is that you can calculate the distance to the nodes lower then the target node by passing a parameter denoting the distance from target if you have reached it. And the distance to the upper nodes can be calculated by returning value + 1 from the target node.

# Approach
DFS + some tricks

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```kotlin []
/**
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int = 0) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun distanceK(root: TreeNode?, target: TreeNode?, k: Int): List<Int> {
        if (target == null) return emptyList()
        val result = mutableSetOf<Int>()

        f(root, target, k, -1, result)
        return result.toList()
    }

    private fun f(root: TreeNode?, target: TreeNode, k: Int, cur: Int, result: MutableSet<Int>): Int {
        if (root == null) return -1
        if (cur == k) {
            result += root.`val`
        }

        if (root == target) {
            if (k == 0) {
                result += root.`val`
            }
            val l = f(root.left, target, k, 1, result)
            val r = f(root.right, target, k, 1, result)
            return 1
        } else {
            if (cur == -1) {
                var l = f(root.left, target, k, -1, result)
                val r = f(root.right, target, k, if (l != -1) l + 1 else -1, result)
                f(root.left, target, k, if (r != -1) r + 1 else -1, result)
                if (l == k || r == k) {
                    result += root.`val`
                }
                return if (l != -1) l + 1 else if (r != -1) r + 1 else -1
            } else {
                f(root.left, target, k, cur + 1, result)
                f(root.right, target, k, cur + 1, result)
                return -1
            }
        }
    }
}
```