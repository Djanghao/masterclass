# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-two-numbers-ii/solutions/3777982/](https://leetcode.com/problems/add-two-numbers-ii/solutions/3777982/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
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
    def addTwoNumbers(l1: ListNode, l2: ListNode): ListNode = 
      reverse(add(reverse(l1), reverse(l2), 0))

    def add(l1: ListNode, l2: ListNode, carry: Int): ListNode = 
      if (l1 == null && l2 == null && carry == 0) null
      else {
        val sum = (if (l1 == null) 0 else l1.x) + (if (l2 == null) 0 else l2.x) + carry
        val res = new ListNode(sum % 10)
        res.next = add(if (l1 == null) null else l1.next, if (l2 == null) null else l2.next, sum / 10)
        res
      }

    def reverse(node: ListNode): ListNode = 
      if (node == null || node.next == null) node
      else {
        val res = reverse(node.next)
        node.next.next = node
        node.next = null
        res
      }
}
```