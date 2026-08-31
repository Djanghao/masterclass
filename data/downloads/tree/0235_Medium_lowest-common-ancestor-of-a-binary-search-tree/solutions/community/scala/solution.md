# Efficient Scala solution

**Author:** tumakha
**Votes:** 2
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/1348105/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/1348105/)

---

```scala
  def lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode = {
    val List(start, end) = List(p.value, q.value).sorted

    @annotation.tailrec
    def recur(node: TreeNode): TreeNode =
      node.value match {
        case v if v < start => recur(node.right)
        case v if v > end => recur(node.left)
        case _ => node
      }

    recur(root)
  }
```