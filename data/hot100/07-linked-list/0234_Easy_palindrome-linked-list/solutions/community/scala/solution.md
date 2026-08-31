# Scala O(n) time and O(1) space with another solution

**Author:** squadgazzz
**Votes:** 3
**Link:** [https://leetcode.com/problems/palindrome-linked-list/solutions/968100/](https://leetcode.com/problems/palindrome-linked-list/solutions/968100/)

---

Recurcive O(n) time O(1) time
```
  def isPalindrome(head: ListNode): Boolean = {
    def go(head: ListNode, node: ListNode): ListNode = {
      if (node == null) head
      else {
        val ln = go(head, node.next)
        if (ln == null || ln.x != node.x) null
        else if (ln.next != null) {
          ln.next
        } else ln
      }
    }

    head == null || head.next == null || go(head, head) != null
  }
  ```
 
Tailrec with splitting
```
object PalindromeLinkedList extends App {
  def isPalindrome(head: ListNode): Boolean = {
    @annotation.tailrec
    def go(left: ListNode, right: ListNode): Boolean = {
      if (left == null || right == null) true
      else {
        if (left.x != right.x) false
        else go(left.next, right.next)
      }
    }

    if (head == null || head.next == null) true
    else {
      val right = splitList(head, head.next)
      val left  = reverseList(head)

      go(left, right)
    }
  }

  @annotation.tailrec
  def splitList(slow: ListNode, fast: ListNode): ListNode = {
    if (fast.next == null) {
      val right = slow.next
      slow.next = null
      right
    } else if (fast.next.next == null) {
      val right = slow.next.next
      slow.next = null
      right
    } else {
      splitList(slow.next, fast.next.next)
    }
  }

  def reverseList(head: ListNode): ListNode = {
    @annotation.tailrec
    def go(curr: ListNode, next: ListNode): ListNode = {
      if (curr != null) {
        val n = curr.next
        curr.next = next
        go(n, curr)
      } else {
        next
      }
    }

    go(head, null)
  }
}
```