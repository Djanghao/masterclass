# Python 3 || 9 lines,  trichotomy principle || T/S: 99% / 56%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/4994162/](https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/4994162/)

---

Based on whether `median < k`, `median > k`, or `median == k` we apply one of three strategies to determine the number of moves.
```
class Solution:
    def minOperationsToMakeMedianK(self, nums: List[int], k: int) -> int:

        n = len(nums)
        nums.sort()
        medIdx = n//2
        median = nums[medIdx]

        if median < k:
            return sum(k - num for num in nums[medIdx:n]  if num < k)

        if median > k:
            return sum(num - k for num in nums[:medIdx+1] if num > k)
        
        return 0          # median == k
        
```
[https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/submissions/1226843717/](https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/submissions/1226843717/)



I could be wrong, but I think that time complexity is *O*(*N*log*N*) and space complexity is *O*(1), in which *N* ~ `len(nums)`.