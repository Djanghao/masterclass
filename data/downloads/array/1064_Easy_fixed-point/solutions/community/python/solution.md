# Python Binary Search Solution

**Author:** rexcancode
**Votes:** 6
**Link:** [https://leetcode.com/problems/fixed-point/solutions/305186/](https://leetcode.com/problems/fixed-point/solutions/305186/)

---

```
class Solution(object):
    def fixedPoint(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        
        if not A: return -1
        
        start, end = 0, len(A)-1
        
        while start + 1 < end:
            mid = (start + end) // 2
            
            if mid <= A[mid]:
                end = mid
            else:
                start = mid
        
        if A[start] == start:
            return start
        
        if A[end] == end:
            return end
        
        return -1
```