# Python O(n) Time, O(n) Space

**Author:** JohnMullan
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-frequency/solutions/6085630/](https://leetcode.com/problems/linked-list-frequency/solutions/6085630/)

---

# Complexity
- Time complexity: $$O(n)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python []
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def frequenciesOfElements(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        d=defaultdict(int)
        cp=head
        while cp:
            d[cp.val]+=1
            cp=cp.next
        temp=ListNode(-1,head)
        for value in d.values():
            temp.next.val=value
            temp=temp.next
        temp.next=None
        return head
        
        
```