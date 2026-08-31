# Scala Mono-stack (Functional Programming)

**Author:** HeavenWatcher
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/2851990/](https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/2851990/)

---

```
/**
 * Definition for singly-linked list.
 * class ListNode(_x: Int = 0, _next: ListNode = null) {
 *   var next: ListNode = _next
 *   var x: Int = _x
 * }
 */
object Solution {
    def removeNodes(head: ListNode): ListNode = {
        def helper(list: ListNode, stack: List[Int]): List[Int] = list match {
            case null => stack
            case node => {
                val (left, right) = stack.span(_ < node.x)
                helper(node.next, (node.x)::right)
            }
        }
        
        helper(head, List[Int]()).foldLeft(null.asInstanceOf[ListNode])((h, n) => new ListNode(n, h))
    }
}
```