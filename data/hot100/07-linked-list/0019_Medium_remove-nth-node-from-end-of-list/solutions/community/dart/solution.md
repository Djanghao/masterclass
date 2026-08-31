# Simple, understandable and fast.

**Author:** AbdulazimIslomjonov
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/2965917/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/2965917/)

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
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
ListNode? removeNthFromEnd(ListNode? head, int n) {
  final dummy = ListNode(0, head);
  ListNode? left = dummy;
  ListNode? right = head;

  while(n > 0 && right != null) {
    right = right.next;
    n--;
  }
  while(right != null) {
    right = right.next;
    left = left?.next;
  }
  left?.next = left.next?.next;
  return dummy.next;
}
}
```