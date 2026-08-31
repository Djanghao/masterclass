# Scala solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/3668640/](https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/3668640/)

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
    def findSecondMinimumValue(root: TreeNode): Int = {
        def traverse(node: TreeNode, minVal: Int): Option[Int] = 
          if (node == null) None
          else if (node.value > minVal) Some(node.value)
          else 
            (traverse(node.left, minVal), traverse(node.right, minVal)) match {
              case (Some(l), Some(r)) => Some(math.min(l, r))
              case (Some(x), None) => Some(x)
              case (None, Some(y)) => Some(y)
              case _ => None
            }
        traverse(root, root.value).getOrElse(-1)
    }
}
```