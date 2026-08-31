# scala dfs

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/5032996/](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/solutions/5032996/)

---

```
object Solution {
  def sufficientSubset(root: TreeNode, limit: Int): TreeNode = {
    def f(node: TreeNode, acc: Long): Option[TreeNode] = {
      lazy val newAcc = acc + node.value
      lazy val (l,r) = (Option(node.left ).flatMap(f(_,  newAcc)),
                        Option(node.right).flatMap(f(_,  newAcc)))
      (node.left, node.right) match {
        case (null, null) => if(newAcc < limit) None else Some(node)
        case _ => 
          if(l.isEmpty) node.left=null
          if(r.isEmpty) node.right=null
          if(l.isEmpty && r.isEmpty) None else Some(node)
      }
    }
    f(new TreeNode(0,root),0).map(_.left).getOrElse(null)
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