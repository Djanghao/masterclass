# [scala] - two DFS - TLE

**Author:** nikiforo
**Votes:** 2
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree-ii/solutions/3420368/](https://leetcode.com/problems/cousins-in-binary-tree-ii/solutions/3420368/)

---

# Intuition
First find sum of all nodes on each level. Then, subtract cousins sum from the level sums. Value is replaced in the tree nodes to save memory allocations. Nevertheless, the solution doesn't pass the tests.

# Code
```
def replaceValueInTree(root: TreeNode): TreeNode = {
    val levels = scala.collection.mutable.Map.empty[Int, Long].withDefaultValue(0)
    def goSums(node: TreeNode, level: Int): Unit =
      if (node != null) {
        levels(level) += node.value
        goSums(node.left, level + 1)
        goSums(node.right, level + 1)
      }

    goSums(root, 0)

    def go(node: TreeNode, level: Int, parentSum: Long): Unit = {
      if(node != null) {
        val nodeSum = computeParentSum(node)
        node.value = (levels(level) - parentSum).toInt
        go(node.left, level + 1, nodeSum)
        go(node.right, level + 1, nodeSum)
      }
    }

    val rootSum = computeParentSum(root)
    go(root.left, 1, rootSum)
    go(root.right, 1, rootSum)
    root.value = 0
    root
  }

  def computeParentSum(node: TreeNode) = {
    val left = if(node.left == null) 0 else node.left.value
    val right = if(node.right == null) 0 else node.right.value
    left.toLong + right
  }
```