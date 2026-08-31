# scala easy solution

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3442310/](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3442310/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
    def longestZigZag(root: TreeNode): Int = {
      def dfs(root: TreeNode, direction: Int, curDepth: Int, maxDepth: Int):Int = {
        if (root == null) {
          (maxDepth max curDepth) - 1
        } else  if (direction == 0) {
          dfs(root.left, 1, curDepth + 1, maxDepth max (curDepth + 1)) max dfs(root.right, 0, 1, maxDepth max (curDepth + 1))
        } else  {
          dfs(root.right, 0, curDepth + 1, maxDepth max (curDepth + 1)) max dfs(root.left, 1, 1, maxDepth max (curDepth + 1))
        }
      }
      dfs(root, 0, 0, 0)
    }
}
```