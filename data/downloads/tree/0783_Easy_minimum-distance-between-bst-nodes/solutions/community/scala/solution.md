# [Scala] - simple recursive solution

**Author:** myeyeswereclosed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3833047/](https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/3833047/)

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
    def minDiffInBST(root: TreeNode): Int = {
        def collectValues(node: TreeNode): List[Int] = 
            node match {
                case null => List()
                case n => List(n.value) ::: collectValues(n.left) ::: collectValues(n.right)
            }

        @annotation.tailrec
        def diffs(nums: List[Int], acc: List[Int]):List[Int] = 
            nums match {
                case Nil => acc
                case a::Nil => acc
                case a::b::tail => diffs(b::tail, (b-a)::acc)     
            }

        diffs(collectValues(root).sorted, List()).min
    }
}
```