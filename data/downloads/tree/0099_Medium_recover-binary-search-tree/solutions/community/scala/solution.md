# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solutions/3743260/](https://leetcode.com/problems/recover-binary-search-tree/solutions/3743260/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
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
    def recoverTree(root: TreeNode): Unit = {
      var prev: TreeNode = null
      var first: TreeNode = null
      var second: TreeNode = null

      def inorder(node: TreeNode): Unit = 
        if (node != null) {
          inorder(node.left)
          if (prev != null && prev.value > node.value) {
            if (first == null) first = prev
            second = node
          }
          prev = node
          inorder(node.right) 
        }

      inorder(root)
      val temp = first.value
      first.value = second.value
      second.value = temp
    }
}
```