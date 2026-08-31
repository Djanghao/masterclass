# Clean Scala Solution

**Author:** bodotzhao
**Votes:** 2
**Link:** [https://leetcode.com/problems/balanced-binary-tree/solutions/1286622/](https://leetcode.com/problems/balanced-binary-tree/solutions/1286622/)

---

```
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def isBalanced(root: TreeNode): Boolean = {
        val result = helper(root)
        return result._2
    }

    /*
     * Return the height of a tree and whether it's balanced in a tuple
     */
    def helper(root: TreeNode): (Int, Boolean) = {
        // empty tree is balanced
        if (root == null) {
            return (0, true)
        }

        // recursively check left and right subtrees
        val (leftHeight, isLeftBalanced) = helper(root.left)
        val (rightHeight, isRightBalanced) = helper(root.right)
        
        val height = scala.math.max(leftHeight, rightHeight) + 1
        val heightDiff = scala.math.abs(leftHeight - rightHeight) <= 1
        val isBalanced = isLeftBalanced && isRightBalanced && heightDiff

        return (height, isBalanced)
    }
}
```