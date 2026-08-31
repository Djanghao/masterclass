# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/3845306/](https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/3845306/)

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
  ListNode? mergeNodes(ListNode? head) {
      final List<int> res = [];
      final List<List<int>> separatedNodes = [];
      var temp = head;
      while(temp != null) {
          res.add(temp.val);
          temp = temp.next;
      }

      for (int i = 0; i < res.length; i++) {
          final List<int> currentNodes = [];
          while(res[i] != 0) {
              currentNodes.add(res[i]);
              i += 1;
          }
          separatedNodes.add(currentNodes);
      }

      final ans = separatedNodes.map((e) {
          final sumn = e.fold<int>(0, (a, b) => a + b);
          return sumn;
      }).where((f) => f != 0).map((g) => ListNode(g)).toList();

      var dummyNode = ListNode();

      for (int k = 0; k < ans.length - 1; k++) {
          ans[k].next = ans[k + 1];
      }

      dummyNode = ans[0];

      return dummyNode;
  }
}
```