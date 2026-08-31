# Clean Scala Solution

**Author:** bodotzhao
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-linked-list-elements/solutions/1377664/](https://leetcode.com/problems/remove-linked-list-elements/solutions/1377664/)

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
    def removeElements(head: ListNode, value: Int): ListNode = {
        if (head == null) {
            return null
        }
        if (head.x != value) {
            head.next = removeElements(head.next, value)
            return head
        } else {
            return removeElements(head.next, value)
        }
    }
}
```