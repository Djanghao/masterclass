# Scala - beats 100 % on time and memory

**Author:** trololo999
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/4385828/](https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/4385828/)

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

 import scala.collection.mutable


object Solution {
    def widthOfBinaryTree(root: TreeNode): Int = {
    var maxWidth = 0
    val queue = mutable.Queue[(Int, TreeNode)]()

    queue.enqueue((0, root))

    while(queue.nonEmpty) {
      val length = queue.length
      val level = mutable.ArrayBuffer[Int]()
      for (- <- 0 until length) {
        val (index, node) = queue.dequeue()
        if (node != null) {
          level.addOne(index)
          val leftIndex = getLeftIndex(index)
          queue.enqueue((leftIndex, node.left))
          val rightIndex = getRightIndex(index)
          queue.enqueue((rightIndex, node.right))
        }
      }
      val distance =
        if (level.nonEmpty) {
          (level.max - level.min) + 1
        } else {
          0
        }
      if (distance > maxWidth) {
        maxWidth = distance
      }

    }

    maxWidth
  }

  def getLeftIndex(index: Int): Int = {
    (index*2) + 1
  }

  def getRightIndex(index: Int): Int = {
    (index * 2) + 2
  }
}
```