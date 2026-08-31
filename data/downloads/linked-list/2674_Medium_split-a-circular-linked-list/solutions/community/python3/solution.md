# [Python 3] Linked List + Slow and Fast pointer - Easy to understand

**Author:** dolong2110
**Votes:** 4
**Link:** [https://leetcode.com/problems/split-a-circular-linked-list/solutions/3519151/](https://leetcode.com/problems/split-a-circular-linked-list/solutions/3519151/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def splitCircularLinkedList(self, list: Optional[ListNode]) -> List[Optional[ListNode]]:
        slow, fast = list, list.next
        while fast.next != list:
            slow = slow.next
            if fast.next.next != list: fast = fast.next.next
            else: fast = fast.next
        next_list = slow.next
        slow.next = list
        fast.next = next_list
        return [list, next_list]
```