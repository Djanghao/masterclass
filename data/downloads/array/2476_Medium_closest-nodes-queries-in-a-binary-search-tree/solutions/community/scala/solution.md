# 7 lines scala bfs with sorted set

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/5033406/](https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/5033406/)

---

```
object Solution {
  import collection.immutable.{Queue,TreeSet}
  def closestNodes(root: TreeNode, queries: List[Int]): List[List[Int]] = {
    def f(q: Queue[TreeNode], acc: TreeSet[Int]): TreeSet[Int] = {
      lazy val (node,t) = q.dequeue
      if(q.isEmpty) acc
      else f(t ++ List(Option(node.left),Option(node.right)).flatten, acc + node.value)
    }
    lazy val tset = f(Queue(root), TreeSet())
    queries.map{a => List( tset.maxBefore(a+1), tset.minAfter(a)).map(_.getOrElse(-1))}
  }
}
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */

```