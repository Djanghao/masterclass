# Dart

**Author:** darv
**Votes:** 1
**Link:** [https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/3874144/](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/3874144/)

---

# Code
```
class Solution {
  int gcd(int a, int b) => b == 0 ? a : gcd(b, a % b);

  ListNode? insertGreatestCommonDivisors(ListNode? head) {
    final res = ListNode(0);
    res.next = head;

    while (head?.next != null) {
      final next = head!.next;
      head.next = ListNode(gcd(head.val, next!.val));
      head.next!.next = next;
      head = next;
    }
    return res.next;
  }
}

```