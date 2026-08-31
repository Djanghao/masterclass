# Tailrec

**Author:** blue-tachikoma
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-sum-ii/solutions/5716190/](https://leetcode.com/problems/path-sum-ii/solutions/5716190/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
import scala.annotation.tailrec

/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
  case class THPath(node: TreeNode, path: List[Int], currentSum: Int)

  def pathSum(root: TreeNode, targetSum: Int): List[List[Int]] = {
    def isLeaf(node: TreeNode): Boolean =
      node.left == null && node.right == null

    def isTarget(node: TreeNode, csum: Int): Boolean =
      node.value + csum == targetSum

    @tailrec
    def dfs(stack: List[THPath], acc: List[List[Int]]): List[List[Int]] =
      stack match {
        case Nil => acc.reverse
        case THPath(null, _, _) :: tail => dfs(tail, acc) 
        case THPath(node, path, csum) :: tail if (isLeaf(node) && isTarget(node, csum)) => 
          val updatedPath = node.value +: path
          dfs(tail, updatedPath.reverse :: acc)
        case THPath(node, path, _) :: tail if (isLeaf(node)) => 
          dfs(tail, acc)
        case THPath(node, path, csum) :: tail => 
          val updatedPath = node.value +: path
          val updatedCsum = node.value + csum
          val left = THPath(node.left, updatedPath, updatedCsum)
          val right = THPath(node.right, updatedPath, updatedCsum)
          dfs(left :: right :: tail, acc)
      }

    if (root == null) List.empty
    else dfs(List(THPath(root, List.empty, 0)), List.empty)
  }
}
```