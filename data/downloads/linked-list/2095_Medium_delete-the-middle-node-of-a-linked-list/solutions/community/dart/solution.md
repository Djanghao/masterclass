# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/3883040/](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/3883040/)

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
  ListNode? deleteMiddle(ListNode? head) {
      var temp = head;
      final List<int> res = [];
      while (temp != null) {
          res.add(temp.val);
          temp = temp.next;
      }

      final l = 0;
      final h = res.length;
      final mid = (l + h) ~/ 2;
      res.removeAt(mid);

      ListNode node = ListNode();
      ListNode ans = node;
      for (int i = 0; i < res.length; i++) {
          ans.next = ListNode(res[i]);
          ans = ans.next!;
      }

      return node.next;
  }
}
```