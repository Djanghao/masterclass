# scala 2line

**Author:** tjwornjs
**Votes:** 2
**Link:** [https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/1118638/](https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/1118638/)

---

```scala
  def preorder(root: Node): List[Int] = {
    if (root == null) Nil
    else List(root.value) ::: root.children.flatMap(node => preorder(node))
  }
```