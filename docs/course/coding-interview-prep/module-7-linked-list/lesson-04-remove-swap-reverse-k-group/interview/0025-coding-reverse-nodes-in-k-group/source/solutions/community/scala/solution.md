# scala solution

**Author:** urbanclimatefr
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/3698254/](https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/3698254/)

---

# Approach
1. Determine the length of the linked list.
2. Initialize a dummy node and set groupPrev to this dummy node.
3. While there are at least k nodes remaining in the list, perform an in-place reversal of the next k nodes and update the next pointers.
4. When there are less than k nodes remaining in the list, it attaches the remaining nodes to the end of the reversed list.
5. Return the list that starts after the dummy node.

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
 $$O(1)$$

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
  def reverseKGroup(head: ListNode, k: Int): ListNode = {
    var length = 0
    var node = head
    while (node != null) {
      length += 1
      node = node.next
    }

    val dummy = new ListNode(0, head)
    var groupPrev = dummy

    while (length >= k) {
      var curr = groupPrev.next
      var groupNext = curr
      for (_ <- 0 until k) {
        val nextNode = curr.next
        curr.next = groupPrev.next
        groupPrev.next = curr
        curr = nextNode
      }
      groupNext.next = curr
      groupPrev = groupNext
      length -= k
    }
    dummy.next
  }
}
```