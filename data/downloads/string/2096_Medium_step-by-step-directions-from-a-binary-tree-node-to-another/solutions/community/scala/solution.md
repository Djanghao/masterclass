# Scala FP: short & simple tailrec DFS + paths combining

**Author:** SerhiyShaman
**Votes:** 2
**Link:** [https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/5484496/](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/5484496/)

---

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
  def getDirections(root: TreeNode, startValue: Int, destValue: Int): String = {
    @annotation.tailrec
    def pathToDFS(value: Int, stack: List[(List[Char], TreeNode)] = List(Nil -> root)): List[Char] =
      if (stack.head._2 == null) pathToDFS(value, stack.tail)
      else if (stack.head._2.value == value) stack.head._1.reverse
      else {
        val (path, root) = stack.head
        pathToDFS(value, ('L' :: path, root.left) :: ('R' :: path, root.right) :: stack.tail)
      }

    val pathToStart = pathToDFS(startValue)
    val pathToDest = pathToDFS(destValue)
    val commonLen = pathToStart.zipAll(pathToDest, ' ', ' ').indexWhere(p => p._1 != p._2)
    "U" * (pathToStart.length - commonLen) + pathToDest.drop(commonLen).mkString
  }
}
```