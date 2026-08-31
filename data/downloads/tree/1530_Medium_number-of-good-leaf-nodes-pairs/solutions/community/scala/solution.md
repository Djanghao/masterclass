# Scala: recursive DFS with O(n*D)/O(n*D)

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5501322/](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5501322/)

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

  def countPairs(root: TreeNode, distance: Int): Int = {
    def newEmptyDistances(): Array[Int] = Array.ofDim(distance + 1)
    def newLeafDistances(): Array[Int] = {val a = newEmptyDistances(); a(1) = 1; a}

    implicit class DistanceCountsExt(val distanceCounts: Array[Int]) {
      def +(add: Array[Int]): Array[Int] = {for(i <- distanceCounts.indices) distanceCounts(i) += add(i); distanceCounts}

      def unary_~ = {val a = newEmptyDistances(); distanceCounts.copyToArray(a, 1); a}
    }

    def leafDistancesDFS(node: TreeNode, parentDistanceCounts: Array[Int] = Array.empty, parentPairs: Int = 0): (Array[Int], Int) =
      (node.left, node.right) match {
        case (null, null) => 
          (newLeafDistances(), parentPairs + parentDistanceCounts.sum)
        case (left, null) =>
          val (leftDistanceCounts, leftPairs) = leafDistancesDFS(left, ~parentDistanceCounts, parentPairs)
          (~leftDistanceCounts, leftPairs)
        case (null, right) => 
          val (rightDistanceCounts, rightPairs) = leafDistancesDFS(right, ~parentDistanceCounts, parentPairs)
          (~rightDistanceCounts, rightPairs)
        case (left, right) =>
          val incParentDistanceCounts = ~parentDistanceCounts
          val (leftDistanceCounts, leftPairs) = leafDistancesDFS(left, incParentDistanceCounts, parentPairs)
          val incLeftDistanceCounts = ~leftDistanceCounts
          val (rightDistanceCounts, rightPairs) = leafDistancesDFS(right, incParentDistanceCounts + incLeftDistanceCounts, leftPairs)
          (incLeftDistanceCounts + ~rightDistanceCounts, rightPairs)
      }

    leafDistancesDFS(root)._2
  }
}
```