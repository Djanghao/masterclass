# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/5446369/](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/solutions/5446369/)

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
    def recoverFromPreorder(traversal: String): TreeNode = {
    def parseNode(s: String): (Int, String) = {
      val value = s.takeWhile(_ != '-').toInt
      val rest = s.dropWhile(_ != '-')
      (value, rest)
    }

    def buildTree(s: String, depth: Int): (TreeNode, String) = {
      if (s.isEmpty) (null, s)
      else {
        val (value, rest) = parseNode(s)
        val node = new TreeNode(value)
        val (leftChild, restAfterLeft) = if (rest.startsWith("-" * (depth + 1))) buildTree(rest.drop(depth + 1), depth + 1) else (null, rest)
        val (rightChild, restAfterRight) = if (restAfterLeft.startsWith("-" * (depth + 1))) buildTree(restAfterLeft.drop(depth + 1), depth + 1) else (null, restAfterLeft)
        node.left = leftChild
        node.right = rightChild
        (node, restAfterRight)
      }
    }

    val (root, _) = buildTree(traversal, 0)
    root
  }
}
```