# [Python3] Heap

**Author:** frolovdmn
**Votes:** 15
**Link:** [https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/3144075/](https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/3144075/)

---

```
class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        nums = [-num for num in gifts]
        heapify(nums)
        
        while k:
            tmp = math.isqrt(-heappop(nums))
            heappush(nums, -tmp)
            k -= 1
            
        return -sum(nums)
```