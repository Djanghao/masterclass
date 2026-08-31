# Combining middle & reverse functions from other problems

**Author:** jazzdog
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/6056297/](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/6056297/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
import scala.annotation.tailrec
import scala.math.max

object Solution {
  private def secondHalf(head: ListNode): ListNode = {
    @tailrec
    def slowFastRecurse(slow: ListNode = head, fast: ListNode = head): ListNode =
      if fast == null then slow else slowFastRecurse(slow.next, fast.next.next)

    slowFastRecurse()
  }

  private def reverseList(head: ListNode): ListNode = {
    @tailrec
    def recurse(previous: ListNode = null, current: ListNode = head): ListNode = {
      if current == null then previous else {
        val next = current.next
        current.next = previous
        recurse(current, next)
      }
    }

    recurse()
  }

  def pairSum(head: ListNode): Int = {
    @tailrec
    def sumFromBothEnds(head: ListNode, end: ListNode, maxSoFar: Int = 0): Int = {
      if end == null then maxSoFar
      else sumFromBothEnds(head.next, end.next, max(maxSoFar, head.x + end.x))
    }

    sumFromBothEnds(head, reverseList(secondHalf(head)))
  }
}
```