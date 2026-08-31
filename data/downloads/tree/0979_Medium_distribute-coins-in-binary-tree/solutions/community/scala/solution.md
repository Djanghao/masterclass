# Easy Scala Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5176431/](https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5176431/)

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
    def distributeCoins(root: TreeNode): Int = {
        var steps=0
        def hlpr(root:TreeNode):Int=
        {
            if   (root==null)   return 0
            val leftPart=hlpr(root.left)
            val rightPart=hlpr(root.right)
            steps=steps+(Math.abs(leftPart)+Math.abs(rightPart))
            return (leftPart+rightPart+root.value -1)
        }
        hlpr(root)
        return steps
    }
}
```