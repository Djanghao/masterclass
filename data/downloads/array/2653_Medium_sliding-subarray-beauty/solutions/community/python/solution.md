# [Python 3] Sorted Containers

**Author:** abhishek_nub
**Votes:** 7
**Link:** [https://leetcode.com/problems/sliding-subarray-beauty/solutions/3445704/](https://leetcode.com/problems/sliding-subarray-beauty/solutions/3445704/)

---

```
from sortedcontainers import SortedList

class Solution:
    def getSubarrayBeauty(self, nums: List[int], k: int, x: int) -> List[int]:
        win = SortedList()
        
        for i in range(k):
            win.add(nums[i])
        
        res = []
        if win[x - 1] < 0:
            res.append(win[x - 1])
        else:
            res.append(0)
        
        for i in range(k, len(nums)):
            win.add(nums[i])
            win.discard(nums[i - k])
            
            if win[x - 1] < 0:
                res.append(win[x - 1])
            else:
                res.append(0)
        
        return res
```