# Python3. Simple traverse

**Author:** srptv
**Votes:** 3
**Link:** [https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/5334363/](https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/5334363/)

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
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def gameResult(self, head: Optional[ListNode]) -> str:
        even = 0
        odd = 0
        
        while head:

            if head.val > head.next.val:
                even += 1
            else:
                odd += 1

            head = head.next.next
        
        if even > odd:
            return "Even"
        elif odd > even:
            return "Odd"
        else:
            return "Tie"
        
```