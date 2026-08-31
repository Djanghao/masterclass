# Scala simple tail recurcive

**Author:** squadgazzz
**Votes:** 2
**Link:** [https://leetcode.com/problems/odd-even-linked-list/solutions/967235/](https://leetcode.com/problems/odd-even-linked-list/solutions/967235/)

---

```
  def oddEvenList(head: ListNode): ListNode = {
    @annotation.tailrec
    def go(odd: ListNode, even: ListNode): ListNode = {
      if (even != null && even.next != null) {
        odd.next = even.next
        even.next = odd.next.next
        go(odd.next, even.next)
      } else {
        odd
      }
    }
    
    if (head == null) {
      head
    } else {
      val evenHead = head.next
      go(head, head.next).next = evenHead
      head
    }
  }
  ```