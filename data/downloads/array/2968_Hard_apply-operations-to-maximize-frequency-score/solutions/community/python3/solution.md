# Python 3 || 9 lines,  two pointers || T/S: 70% / 73%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/4418265/](https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/4418265/)

---

```
class Solution:
    def maxFrequencyScore(self, nums: List[int], k: int) -> int:
        
        notValid = lambda l, n: (acc[l] + acc[n-l] - 2*acc[n//2] - 
                                                 nums[n//2]*(n%2) > k)

        nums.sort()
        acc = list(accumulate(nums, initial = 0))
        left = ans = 0

        for rght in range(len(nums)):
            while notValid(left, left+rght+1): left+= 1
            ans = max(ans, rght - left)
           
        return ans+1
```
[https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/submissions/1295792677/](https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/submissions/1295792677/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.