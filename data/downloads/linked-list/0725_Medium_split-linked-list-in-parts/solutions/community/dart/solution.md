# Dart

**Author:** darv
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-linked-list-in-parts/solutions/4007719/](https://leetcode.com/problems/split-linked-list-in-parts/solutions/4007719/)

---

# Code
```
class Solution {
  List<ListNode?> splitListToParts(ListNode? head, int k) {
    var length = 0;
    var node = head;
    while (node != null) {
      length++;
      node = node.next;
    }
    final List<ListNode?> res = List.filled(k, null);
    ListNode? cut(ListNode? head, int length) {
      ListNode? dummy = ListNode(-1);
      dummy.next = head;
      for (int i = 0; i < length; i++)
        dummy = dummy?.next;
      final res = dummy?.next;
      dummy?.next = null;
      return res;
    }
    for (int i = 0, nominal = length ~/ k; i < k; i++) {
      final cut_length = length == nominal * (k - i) ? nominal : nominal + 1;
      res[i] = head;
      head = cut(head, cut_length);
      length -= cut_length;
    }
    return res;
  }
}

```