# Scala Solution

**Author:** ruslanlbogun
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/1570831/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/1570831/)

---

```
object Solution {
 def deleteDuplicates(head: ListNode): ListNode = {
    head match {
      case h if h == null => h
      case h if h.next == null => h
      case h if h.next.x == h.x => deleteDuplicates(h.next)
      case h => new ListNode(h.x, deleteDuplicates(h.next))
    }
  }
}
```