# scala dfs solution. mutable Arrays to avoid MLE

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/solutions/5971048/](https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/solutions/5971048/)

---

```scala []
object Solution {
  import scala.util.chaining._
  def treeQueries(root: TreeNode, queries: Array[Int]): Array[Int] = {
    lazy val lvls = Array.fill(100_001)((-1,-1)) // (level, height)
    lazy val siblings = Array.fill(100_001,2)(-1) // Array(fst,snd) by height
    def dfs2(node: TreeNode,lvl:Int = 0): Int = Iterator(node.left,node.right)
      .collect{case c if c != null => dfs2(c,lvl+1)+1}.maxOption.getOrElse(0)
      .tap(height => lvls(node.value) = (lvl, lvl+height))
    dfs2(root)
    lvls.iterator.zipWithIndex.drop(1).takeWhile(_._1._1 >= 0).foreach{
      case ((lvl,height),i) =>
        lazy val (sib0,sib1) = (siblings(lvl)(0),siblings(lvl)(1))
        if(sib0<0) { siblings(lvl)(0) = i }
        else if(sib0>0 && lvls(sib0)._2 < height) { siblings(lvl)(1) = siblings(lvl)(0); siblings(lvl)(0) = i}
        else if(sib1<0 || lvls(sib1)._2 < height) {siblings(lvl)(1) = i}
    }
    queries.map { q =>
      lazy val lvl = lvls(q)._1
      0 max siblings(lvl).iterator.filterNot(x => x<0 || x == q)
        .take(1).map(lvls(_)._2).to(LazyList)
        .headOption.getOrElse(lvl-1)
    }
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
