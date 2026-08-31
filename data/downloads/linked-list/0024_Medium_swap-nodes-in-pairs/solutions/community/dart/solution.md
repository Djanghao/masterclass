# Dart

**Author:** alexhutcheson
**Votes:** 1
**Link:** [https://leetcode.com/problems/swap-nodes-in-pairs/solutions/2912124/](https://leetcode.com/problems/swap-nodes-in-pairs/solutions/2912124/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```dart
class Solution {
  ListNode? swapPairs(ListNode? head) {
    ListNode? beforeHead = ListNode(0, head);
    ListNode? cur = beforeHead;
    var i = 0;
    while (cur != null) {
      if (i % 2 == 0) {
        cur.next = swapWithNext(cur.next);
      }
      cur = cur.next;
      i++;
    }
    return beforeHead.next;
  }

  ListNode? swapWithNext(ListNode? head) {
    if (head == null || head.next == null) {
      return head;
    }
    var first = head;
    var second = head.next!;
    var next = second.next;
    first.next = next;
    second.next = first;
    return second;
  }
}
```