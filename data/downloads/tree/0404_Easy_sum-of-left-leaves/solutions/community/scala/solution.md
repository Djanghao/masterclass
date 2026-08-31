# 100% beats everyone  scala

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-left-leaves/solutions/5925874/](https://leetcode.com/problems/sum-of-left-leaves/solutions/5925874/)

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
    def sumOfLeftLeaves(root: TreeNode): Int = {
        def node(root : TreeNode) :Int = {
            if (root == null ) return 0
            else if ( root.left!=null && root.left.right == null && root.left.left == null) {
                return root.left.value  + node(root.right)
            }
            else node(root.left) + node(root.right)
        }
        if(root == null) return 0
        
        else node(root)
    }
}
```