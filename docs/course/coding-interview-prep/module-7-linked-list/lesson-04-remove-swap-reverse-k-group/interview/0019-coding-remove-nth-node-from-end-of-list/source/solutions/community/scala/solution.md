# Scala, tail recursion, no null

**Author:** MihailsC
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/3115821/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/3115821/)

---

# Code
```
/**
 * Definition for singly-linked list.
 * class ListNode(_x: Int = 0, _next: ListNode = null) {
 *   var next: ListNode = _next
 *   var x: Int = _x
 * }
 */
object Solution {
    def removeNthFromEnd(head: ListNode, n: Int): ListNode = {
        @annotation.tailrec
        def loop(curHead: ListNode, visitedCount: Int, maybePreRemove: Option[ListNode]): ListNode =
            Option(curHead.next) match {
                case None =>
                    maybePreRemove.fold(ifEmpty = head.next) { preRemove =>
                        preRemove.next = preRemove.next.next
                        head
                    }

                case Some(next) =>
                    val newPreRemove =
                        if (visitedCount == n - 1) Some(head)
                        else maybePreRemove.flatMap(node => Option(node.next))
                    loop(next, visitedCount + 1, newPreRemove)
            }

        loop(head, 0, None)
    }
}
```