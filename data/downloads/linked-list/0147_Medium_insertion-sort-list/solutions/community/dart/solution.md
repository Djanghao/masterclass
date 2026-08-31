# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/insertion-sort-list/solutions/4162074/](https://leetcode.com/problems/insertion-sort-list/solutions/4162074/)

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
  ListNode? insertionSortList(ListNode? head) {
      var temp = head;
      final List<int> res = [];
      while (temp != null) {
          res.add(temp.val);
          temp = temp.next;
      }
      
      final values = insertionSort(res);

      var dummyNode = head;
      var index = 0;

      while (dummyNode != null) {
          dummyNode.val = values[index];
          index += 1;
          dummyNode = dummyNode.next;
      }

      return head;

  }

  List<int> insertionSort(List<int> values) {
      for (int i = 1; i < values.length; i++) {
          final key = values[i];
          int j = i - 1;

          while (j >= 0 && values[j] > key) {
              values[j + 1] = values[j];
              j -= 1;
              values[j + 1] = key;
          }
      }

      return values;
  }
}
```