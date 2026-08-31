# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/3687952/](https://leetcode.com/problems/maximum-binary-tree/solutions/3687952/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log n)
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
    def constructMaximumBinaryTree(nums: Array[Int]): TreeNode = {
        if (nums.isEmpty) null
        else {
          val maxIndex = nums.indexOf(nums.max)
          new TreeNode(nums(maxIndex), constructMaximumBinaryTree(nums.take(maxIndex)), constructMaximumBinaryTree(nums.drop(maxIndex + 1)))
        }
    }
}
```