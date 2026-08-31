# Kotlin | Morris Traversal

**Author:** SamoylenkoDmitry
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3196399/](https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3196399/)

---

#### Join me on Telegram
https://t.me/leetcode_daily_unstoppable/121
#### Intuition
Given that this is a Binary Search Tree, `inorder` traversal will give us an increasing sequence of nodes. Minimum difference will be one of the adjacent nodes differences.
#### Approach
Let's write Morris Traversal. Store current node at the rightmost end of the left children.
#### Complexity
- Time complexity:
$$O(n)$$
- Space complexity:
$$O(1)$$
#### Code
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
    fun minDiffInBST(root: TreeNode?): Int {
        var prev: TreeNode? = null
        var curr = root
        var minDiff = Int.MAX_VALUE
        while (curr != null) {
            if (curr.left == null) {
                if (prev != null) minDiff = minOf(minDiff, Math.abs(curr.`val` - prev.`val`))
                prev = curr
                curr = curr.right
            } else {
                var right = curr.left!!
                while (right.right != null && right.right != curr) right = right.right!!
                if (right.right == curr) {
                    right.right = null
                    curr = curr.right
                } else {
                    right.right = curr
                    val next = curr.left
                    curr.left = null
                    curr = next
                }
            }
        }
        return minDiff
    }
}
```