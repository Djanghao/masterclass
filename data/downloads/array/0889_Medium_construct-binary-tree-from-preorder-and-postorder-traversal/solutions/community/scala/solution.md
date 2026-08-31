# scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/5767517/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solutions/5767517/)

---

```scala []
object Solution {
  def constructFromPrePost(preorder: Array[Int], postorder: Array[Int]): TreeNode = {
    def f(pre: List[Int], post: List[Int]): TreeNode = {
      lazy val (prel, prer) = pre.drop(1).span(_ != post.reverse.drop(1).head)
      lazy val (rpostr, rpostl) = post.reverse.drop(1).span(_ != pre.drop(1).head)
      if(pre.isEmpty) null
      else if(pre.length == 1) new TreeNode(pre.head)
      else if(pre.tail.head == post.init.last) new TreeNode(pre.head,f(pre.tail,post.init))
      else new TreeNode(pre.head,f(prel,rpostl.reverse),f(prer,rpostr.reverse))
    }
    f(preorder.toList,postorder.toList)
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