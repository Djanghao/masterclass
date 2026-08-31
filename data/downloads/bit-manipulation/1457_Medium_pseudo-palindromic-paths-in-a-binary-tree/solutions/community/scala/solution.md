# beats 100% runtime

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/6025340/](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/6025340/)

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
  def pseudoPalindromicPaths(root: TreeNode): Int = {
    if (root == null) 0
    else isPalindrome(root, Map.empty)
  }

  private def isPalindrome(root: TreeNode, acc: Map[Int,Int]): Int = {
    val allNumbers = acc.updated(root.value,acc.getOrElse(root.value,0)+1)
    (root.left, root.right) match {
      case (null, null) =>
        val oddCount = allNumbers.count(_._2%2==1)
        if (oddCount <= 1) 1 else 0
      case (_, null) =>
        isPalindrome(root.left,allNumbers )
      case (null, _) =>
        isPalindrome(root.right, allNumbers)
      case (_, _) =>
        isPalindrome(root.left, allNumbers) + isPalindrome(root.right,allNumbers)
    }
  }
}
```