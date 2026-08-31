# DART | Recursion | 99% speed | without carry

**Author:** vladcto
**Votes:** 3
**Link:** [https://leetcode.com/problems/add-two-numbers/solutions/2750228/](https://leetcode.com/problems/add-two-numbers/solutions/2750228/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1) Exit from recursion: both nodes are null.
2) We find a node for the remainder (next nodes), or if there is none, we make it null.
3) Find the value for new node and the remainder 10 from it.
4) If there is no node for the remainder (no next nodes), create the last node and assign a non-zero remainder.
Otherwise, add the remainder to the node. We start a new recursion.
5) Return a new node.


# Complexity
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![image.png](./images/0.png)

# Code
```dart
class Solution {
  ListNode? addTwoNumbers(ListNode? l1, ListNode? l2) {
    if (l1 == null && l2 == null) {
      return null;
    }

    int value = (l1?.val ?? 0) + (l2?.val ?? 0);
    int remainder = value ~/ 10;
    value %= 10;

    final remainNode = l1?.next ?? l2?.next;
    final node = new ListNode(value);

    if (remainNode == null) {
      if (remainder != 0) {
        node.next = ListNode(remainder);
      }
    } else {
      remainNode.val += remainder;
      node.next = addTwoNumbers(l1?.next, l2?.next);
    }

    return node;
  }
}
```