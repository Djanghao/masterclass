# ✅ Python3: O(N) with 1 loop

**Author:** elhoangvu
**Votes:** 1
**Link:** [https://leetcode.com/problems/linked-list-frequency/solutions/4850445/](https://leetcode.com/problems/linked-list-frequency/solutions/4850445/)

---

# Approach
Using a dict with ListNode values for counting the frequency, storing the count, and linking new nodes in a loop.

# Complexity
- Time complexity: $$O(n)$$

<a href="https://leetcode.com/problems/linked-list-frequency/submissions/1198934784">

![image.png](./images/0.png)
</a>

# Code
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def frequenciesOfElements(self, head: Optional[ListNode]) -> Optional[ListNode]:
        freqs = {}
        out_head = ListNode()
        latest_node = out_head
        while head:
            node = freqs.get(head.val)
            if node:
                node.val += 1
            else:
                node = ListNode(1)
                latest_node.next = node
                latest_node = node
                freqs[head.val] = latest_node
                
            head = head.next

        return out_head.next
        
```