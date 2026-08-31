# Kotlin iterative, Beats 100% space and time, O(logn) time and O(1) space with description

**Author:** OmarNajjar
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-tree-ii/solutions/5547793/](https://leetcode.com/problems/maximum-binary-tree-ii/solutions/5547793/)

---

# Intuition
Iterative Solution
# Approach
Go to the right until you find a node with smaller value
Keep traking for the previuos node since it will be the parent of the new one
Return the root if it was bigger than the new value otherwise return the new node
# Complexity
- Time complexity:
O(logn)

- Space complexity:
O(1)

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
    fun insertIntoMaxTree(root: TreeNode?, `val`: Int): TreeNode? {
        var pre: TreeNode? = null
        var holder = root
        while(holder != null && `val` < holder.`val`) {
            pre = holder
            holder = holder.right
        }

        val treeNode = TreeNode(`val`)
        pre?.right = treeNode
        treeNode.left = holder

        if(root != null && root.`val` > `val`) {
            return root
        } else {
            return treeNode
        }
    }
}
```