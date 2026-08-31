# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-tilt/solutions/3637837/](https://leetcode.com/problems/binary-tree-tilt/solutions/3637837/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m)
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
    def findTilt(root: TreeNode): Int = {
      var tilt = 0
      def dfs(node: TreeNode): Int = 
        if (node == null) 0
        else {
          val leftSum = dfs(node.left)
          val rightSum = dfs(node.right)
          tilt += math.abs(leftSum - rightSum)
          leftSum + rightSum + node.value
        }
      dfs(root)
      tilt
    }
}
```