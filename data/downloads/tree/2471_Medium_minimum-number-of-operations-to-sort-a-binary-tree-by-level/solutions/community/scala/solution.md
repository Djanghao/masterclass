# scala bfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/5492696/](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/5492696/)

---

```scala
object Solution {
  def minimumOperations(root: TreeNode): Int =
    def bfs(q:Vector[TreeNode], acc:List[Vector[Int]]):List[Vector[Int]] =
      if (q.isEmpty) acc.map(_.zipWithIndex.sortBy(_._1).map(_._2))
      else bfs(
        q.flatMap(x=> List(x.left,x.right).flatMap(Option(_))),
        q.map(_.value) +: acc
      )
    bfs(Vector(root),Nil).map{a =>
      def bfs1(i: Int, v:Set[Int], acc: Int): (Int, Set[Int]) = 
        if(v.contains(i)) (acc-1,v) else bfs1(a(i), v+i, acc+1)
      a.foldLeft((0,Set.empty[Int])){case ((acc,aSet),i) =>
        if(aSet.contains(i)) (acc,aSet) else bfs1(i,aSet,acc)
      }._1
    }.sum
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