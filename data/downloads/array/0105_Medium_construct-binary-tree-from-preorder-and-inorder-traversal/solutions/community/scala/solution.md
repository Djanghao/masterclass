# [scala] Beats 100% recursive code

**Author:** VOSID8
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/5962100/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/5962100/)

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
    def buildTree(preorder: Array[Int], inorder: Array[Int]): TreeNode = {
        def helper(in: Array[Int], pre: Array[Int]): TreeNode = {
            if(in.isEmpty || pre.isEmpty) null
            else {
                val value = pre(0)
                val index = in.indexOf(value)
                val (bin, after) = in.splitAt(index)
                val ain = after.tail
                val bpre = pre.tail.take(bin.size)
                val apre = pre.takeRight(ain.size)
                val ans = TreeNode(value, helper(bin, bpre), helper(ain, apre))
                ans
            }
        }
        helper(inorder, preorder)
    }
}
```