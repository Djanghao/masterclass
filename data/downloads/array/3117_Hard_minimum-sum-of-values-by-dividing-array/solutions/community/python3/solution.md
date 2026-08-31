# [Python3] top-down dp

**Author:** ye15
**Votes:** 25
**Link:** [https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5019524/](https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5019524/)

---

Please checkout this [commit](https://github.com/gaosanyong/leetcode/commit/5618938ec2a9c4ae5d4529896d92b52e7556b231) for solutions of weekly 393 in C++, Java, Python3, Javascript and Typescript. 

```
class Solution:
    def minimumValueSum(self, nums: List[int], andValues: List[int]) -> int:
        m, n = len(nums), len(andValues)
        
        @cache
        def fn(i, j, mask): 
            """Return min sum at nums[j] and andValues[k] with given mask."""
            if i == m and j == n: return 0
            if i == m or j == n: return inf 
            mask &= nums[i]
            if mask < andValues[j]: return inf 
            if mask == andValues[j]: return min(fn(i+1, j, mask), nums[i] + fn(i+1, j+1, -1))
            return fn(i+1, j, mask)
            
        ans = fn(0, 0, -1)
        return ans if ans < inf else -1 
```