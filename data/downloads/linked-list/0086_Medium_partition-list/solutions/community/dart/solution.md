# Dart

**Author:** darv
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-list/solutions/3911078/](https://leetcode.com/problems/partition-list/solutions/3911078/)

---

# Code
```
class Solution {
  ListNode? partition(ListNode? head, int x) {
    final ListNode less = ListNode(0), geq = ListNode(0);
    ListNode pilot_less = less, pilot_geq = geq;
    while (head != null) {
      if (head.val < x) {
        pilot_less.next = head;
        pilot_less = pilot_less.next!;
        head = head.next;
        pilot_less.next = null;
      } else {
        pilot_geq.next = head;
        pilot_geq = pilot_geq.next!;
        head = head.next;
        pilot_geq.next = null;
      }
    }
    pilot_less.next = geq.next;
    return less.next;
  }
}


```