# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-univalue-path/solutions/3692104/](https://leetcode.com/problems/longest-univalue-path/solutions/3692104/)

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
    def longestUnivaluePath(root: TreeNode): Int = {
      var res = 0
      def dfs(node: TreeNode, prev: Int): Int = 
        if (node == null) 0
        else {
          val left = dfs(node.left, node.value)
          val right = dfs(node.right, node.value)
          res = math.max(res, left + right)
          if (node.value == prev) math.max(left,right) + 1
          else 0
        }

      if (root == null) 0
      else {
        dfs(root, root.value)
        res
      }
    }
}
```