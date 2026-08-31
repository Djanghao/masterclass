# [Scala] Tree iterator backed by recursively constructed Iterator

**Author:** Abastro
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator/solutions/1966791/](https://leetcode.com/problems/binary-search-tree-iterator/solutions/1966791/)

---

It's 9 lines, but that doesn't matter anyway.
(Faster than 87% but that is also useless)

While it sounds like Iterator would take O(n) for tree size n,
but it is sufficiently lazy so that,
its construction takes O(h) & each step takes amortized O(1).

```scala
class BSTIterator (_root: TreeNode) {
  def iteInOrder: TreeNode => Iterator[Int] = {
    case null => Iterator.empty
    case node => iteInOrder (node.left) ++ Iterator.single (node.value) ++ iteInOrder (node.right)
  }
  val theIte = iteInOrder (_root)
  def next (): Int = theIte.next
  def hasNext (): Boolean = theIte.hasNext
}
```
