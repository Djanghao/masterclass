# Python 3 || 8 lines,  pop & pushpop || T/S: 99% / 60%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4812560/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4812560/)

---

```
class Solution:
    def minOperations(self, nums, k):
        
        heapify (nums)
        ans  = 0
        num = heappop(nums)
        
        while num < k:
            nxt = 2*num+heappop(nums)
            num = heappushpop(nums, nxt)
            ans+= 1

        return ans
```
[https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/submissions/1191890045/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/submissions/1191890045/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ `len(s)`.
