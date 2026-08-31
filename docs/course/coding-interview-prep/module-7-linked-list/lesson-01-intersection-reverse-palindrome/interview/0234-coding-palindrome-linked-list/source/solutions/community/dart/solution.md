# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-linked-list/solutions/3816616/](https://leetcode.com/problems/palindrome-linked-list/solutions/3816616/)

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
  bool isPalindrome(ListNode? head) {
      final values = <int>[];
      while (head != null) {
          values.add(head.val);
          head = head.next;
      }

      return values.join('') == values.reversed.join('');
  }
}
```