# Python O(n) Time, O(1) Space

**Author:** JohnMullan
**Votes:** 0
**Link:** [https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/6088319/](https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/6088319/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python []
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def gameResult(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: str
        """
        even=odd=0
        while head:
            if head.val>head.next.val:
                even+=1
            else:
                odd+=1
            head=head.next.next
        return "Tie" if even==odd else ( "Even" if even>odd else "Odd")
```