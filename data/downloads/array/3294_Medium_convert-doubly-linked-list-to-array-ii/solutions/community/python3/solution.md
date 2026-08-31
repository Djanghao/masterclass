# Simple Python Solution

**Author:** thewizardntc
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/5833866/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-ii/solutions/5833866/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
First go through all the nodes by going forward through the linked list adding to the list. Then go through the list going backwards from the starting node, inserting at the beginning.

This is simple approach, it can be improved by using a queue.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```python3 []
"""
# Definition for a Node.
class Node:
    def __init__(self, val, prev=None, next=None):
        self.val = val
        self.prev = prev
        self.next = next
"""
class Solution:
    def toArray(self, node: 'Optional[Node]') -> List[int]:
        res = []
        curr = node
        while curr:
            res.append(curr.val)
            curr = curr.next

        curr = node.prev
        while curr:
            res.insert(0, curr.val)
            curr = curr.prev

        return res

```