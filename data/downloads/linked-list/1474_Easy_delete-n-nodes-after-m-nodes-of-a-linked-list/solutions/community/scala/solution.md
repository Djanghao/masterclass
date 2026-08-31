# scala solution

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/4457166/](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/4457166/)

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
  def deleteNodes(head: ListNode, m: Int, n: Int): ListNode = {
    var current: ListNode = head
    var prev: ListNode = null

    while (current != null) {
      // Keep m nodes
      for (_ <- 1 to m if current != null) {
        prev = current
        current = current.next
      }

      // Remove n nodes
      for (_ <- 1 to n if current != null) {
        current = current.next
      }

      // Link the kept nodes to the next section
      if (prev != null) prev.next = current
    }

    head
  }
}

```