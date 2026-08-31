# Scala solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/4614460/](https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/4614460/)

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

import scala.collection.mutable.PriorityQueue

object Solution {
  def closestKValues(root: TreeNode, target: Double, k: Int): List[Int] = {
    if (root == null) return List.empty
    val subLeft = closestKValues(root.left, target, k)
    val subRight = closestKValues(root.right, target, k)

    val pq = PriorityQueue.empty[Int](Ordering.by((a: Int) => Math.abs(a - target)))
    pq.addAll(subLeft)
    pq.addOne(root.value)
    pq.addAll(subRight)
    while (pq.size > k) pq.dequeue()
    pq.toList
  }
}


```