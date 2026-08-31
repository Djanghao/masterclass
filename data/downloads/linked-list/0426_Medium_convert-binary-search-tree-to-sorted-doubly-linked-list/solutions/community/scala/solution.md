# Scala Trivial 6 lines! Super easy to understand!

**Author:** pathikritbhowmick
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/5238111/](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/solutions/5238111/)

---

# Code
```
object Solution {
    def treeToDoublyList(root: Node): Node = inOrder(root) match {
        case Nil => null
        case ordered => link(ordered.reduce(link), ordered.head)
    }

    def link(a: Node, b: Node): b.type = {a.right = b; b.left = a; b}

    def inOrder(node: Node): List[Node] = 
        if node == null then Nil else inOrder(node.left) ::: node :: inOrder(node.right)
}
```