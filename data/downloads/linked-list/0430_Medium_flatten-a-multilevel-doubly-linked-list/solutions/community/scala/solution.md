# Functional Solution, time: O(n) space: O(n)

**Author:** cachemiss
**Votes:** 0
**Link:** [https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/4225647/](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/solutions/4225647/)

---

```
object Solution {
    def flatten(head: Node): Node = {
        def dfs(node: Node): Node = {
            Option(node) match {
                case Some(_) if node.child != null && node.next != null =>
                    val tmp = node.next
                    node.next = node.child
                    node.child.prev = node
                    val lastChild = dfs(node.child)
                    node.child = null
                    tmp.prev = lastChild
                    lastChild.next = tmp
                    dfs(tmp)
                case Some(_) if node.child != null => 
                    val tmp = node.child
                    node.next = tmp
                    tmp.prev = node
                    node.child = null
                    dfs(tmp)
                case Some(_) if node.next != null =>
                    dfs(node.next)
                case _ => node
            }
        }
        dfs(head)
        head
    }
}
```