# [scala] Beats 100% inorder traversal

**Author:** VOSID8
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/5986116/](https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/5986116/)

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
```scala []
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
    def averageOfLevels(root: TreeNode): Array[Double] = {
        def helper(base: List[TreeNode], acc: Array[Double]): Array[Double] = {
            val filti = base.filter(_ != null)
            val values = filti.map(_.value.toDouble)
            if(filti.isEmpty) acc
            else helper(filti.flatMap(x => List(x.left, x.right)), 
                acc :+ values.sum/values.size)
        }
        helper(List(root), Array.empty[Double])
    }
}
```