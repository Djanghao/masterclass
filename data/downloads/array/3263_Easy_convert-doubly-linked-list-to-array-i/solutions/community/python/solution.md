# Python O(n) Time, O(n) Space

**Author:** JohnMullan
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/solutions/6083094/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/solutions/6083094/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python []
"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev=None, next=None):
        self.val = val
        self.prev = prev
        self.next = next
"""

class Solution:
    def toArray(self, head):
        """
        :type head: Node
        :rtype: List[int]
        """
        res=[]
        while head:
            res.append(head.val)
            head=head.next
        return res
```