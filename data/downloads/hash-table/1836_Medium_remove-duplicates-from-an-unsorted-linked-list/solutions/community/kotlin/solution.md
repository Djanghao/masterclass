# Readable Solution using Dummy node (sentinel node)

**Author:** roadytom
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/4468270/](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/4468270/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Using dummy node to remove edge cases and make code readable

# Code
```
class Solution {
  fun deleteDuplicatesUnsorted(head: ListNode?): ListNode? {
    // fill the sets and mark nodes to be removed
    val set = mutableSetOf<Int>()
    val valuesToRemove = mutableSetOf<Int>()
    var iterator = head
    while (iterator != null) {
      if (iterator.`val` in set) {
        valuesToRemove += iterator.`val`
      } else {
        set += iterator.`val`
      }
      iterator = iterator.next
    }

    // iterate through the list and remove node if marked as removed
    val dummy = ListNode(-1)
    dummy.next = head
    var prev = dummy
    var curr = dummy.next
    while (curr != null) {
      if (curr.`val` in valuesToRemove) {
        prev.next = curr.next
      } else {
        prev = curr
      }
      curr = curr.next
    }
    return dummy.next
  }
}
```