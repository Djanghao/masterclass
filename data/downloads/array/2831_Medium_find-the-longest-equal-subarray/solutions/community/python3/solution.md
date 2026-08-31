# [Python] O(N) Time, O(N) Space Using Map of Queues (BEST SOLUTION)

**Author:** seafmch
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/3934119/](https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/3934119/)

---

```
class Solution:
    def longestEqualSubarray(self, nums: List[int], k: int) -> int:
        indices = defaultdict(deque)
        ans = 0
        
        for i, x in enumerate(nums):
            indices[x].append(i)
            
            while indices[x][-1] - indices[x][0] + 1 > len(indices[x]) + k:
                indices[x].popleft()
                
            ans = max(ans, len(indices[x]))
        
        return ans
        
        
```