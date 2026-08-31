# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/print-binary-tree/solutions/3672579/](https://leetcode.com/problems/print-binary-tree/solutions/3672579/)

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
    def printTree(root: TreeNode): List[List[String]] = {
        val height = getHeight(root)
        val width = math.pow(2, height).toInt - 1
        val res = Array.ofDim[String](height, width)
        for (i <- res.indices) res(i) = Array.fill(width)("")
        fillMatrix(root, res, 0, 0, width - 1)
        res.map(_.toList).toList
      }

    def getHeight(root: TreeNode): Int =
      if (root == null) 0
      else math.max(getHeight(root.left), getHeight(root.right)) + 1

    def fillMatrix(root: TreeNode, res: Array[Array[String]], row: Int, left: Int, right: Int): Unit =
      if (root != null) {
        val mid = (left + right) / 2
         res(row)(mid) = root.value.toString
         fillMatrix(root.left, res, row + 1, left, mid - 1)
         fillMatrix(root.right, res, row + 1, mid + 1, right)
      }
}
```