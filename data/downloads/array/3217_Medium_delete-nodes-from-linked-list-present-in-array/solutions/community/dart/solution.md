# Simple solution

**Author:** aospiridonov
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5744292/](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5744292/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(m + n)$$,
where $$m$$ the lengths of the nums array and $$n$$ the lengths of the linked list.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m)$$.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  ListNode? modifiedList(List<int> nums, ListNode? head) {
    final valuesToRemove = nums.toSet();
    while (head != null && valuesToRemove.contains(head.val)) {
      head = head.next;
    }
    if (head == null) return null;
    ListNode current = head;
    while (current.next != null) {
      if (valuesToRemove.contains(current.next!.val)) {
        current.next = current.next!.next;
      } else {
        current = current.next!;
      }
    }

    return head;
  }
}

```