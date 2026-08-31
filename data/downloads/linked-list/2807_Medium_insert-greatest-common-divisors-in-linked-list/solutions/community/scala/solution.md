# scala solution

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/3997218/](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/3997218/)

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
```
/**
 * Definition for singly-linked list.
 * class ListNode(_x: Int = 0, _next: ListNode = null) {
 *   var next: ListNode = _next
 *   var x: Int = _x
 * }
 */
object Solution {
  def insertGreatestCommonDivisors(head: ListNode): ListNode = {
    @annotation.tailrec
    def gcd(a: Int, b: Int): Int = if (b == 0) a else gcd(b, a % b)

    @annotation.tailrec
    def f(n: ListNode):ListNode = {
      val t = n.next
      if(t == null) return head
      n.next = new ListNode(gcd(n.x, n.next.x), n.next)
      f(t)
    }
    f(head)
  }
}
```