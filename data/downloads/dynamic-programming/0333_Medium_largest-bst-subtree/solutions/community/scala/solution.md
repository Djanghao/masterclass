# Scala code with comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-bst-subtree/solutions/4620582/](https://leetcode.com/problems/largest-bst-subtree/solutions/4620582/)

---

# Complexity
- Time complexity:
$$O(n)$$, where n is the number of nodes in the tree.

- Space complexity:
$$O(n)$$ in the worst case (skewed tree), $$O(log n)$$ in the best case (balanced tree).

# Code
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
  // Method to find the size of the largest BST subtree
  def largestBSTSubtree(root: TreeNode): Int = {
    var ans = 0

    // Helper function returns a tuple of (isBST, size, min, max)
    def dfs(node: TreeNode): (Boolean, Int, Int, Int) = {
      if (node == null) {
        return (true, 0, Int.MaxValue, Int.MinValue)
      }

      val (isLeftBST, lSize, lMin, lMax) = dfs(node.left)
      val (isRightBST, rSize, rMin, rMax) = dfs(node.right)

      // Check BST properties
      if (isLeftBST && isRightBST && lMax < node.value && node.value < rMin) {
        val currentSize = lSize + rSize + 1
        ans = ans max currentSize
        (true, currentSize, lMin min node.value, rMax max node.value)
      } else {
        (false, 0, 0, 0)
      }
    }

    dfs(root)
    ans
  }
}
```