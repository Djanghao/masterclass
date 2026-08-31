# [Python3] binary search & 2-pointer

**Author:** ye15
**Votes:** 81
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/999157/](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/999157/)

---

**Algo**
Compute prefix array of `nums`. Any at index `i`, you want to find index `j` such at 
`prefix[i] <= prefix[j] - prefix[i] <= prefix[-1] - prefix[j]`
The rest comes out naturally. 

**Implementation** 
```
class Solution:
    def waysToSplit(self, nums: List[int]) -> int:
        prefix = [0]
        for x in nums: prefix.append(prefix[-1] + x)
        
        ans = 0
        for i in range(1, len(nums)): 
            j = bisect_left(prefix, 2*prefix[i])
            k = bisect_right(prefix, (prefix[i] + prefix[-1])//2)
            ans += max(0, min(len(nums), k) - max(i+1, j))
        return ans % 1_000_000_007
```

**Analysis**
Time complexity `O(NlogN)`
Space complexity `O(N)`

Edit
Adding two pointers approach `O(N)` time
```
class Solution:
    def waysToSplit(self, nums: List[int]) -> int:
        prefix = [0]
        for x in nums: prefix.append(prefix[-1] + x)
        
        ans = j = k = 0 
        for i in range(1, len(nums)): 
            j = max(j, i+1)
            while j < len(nums) and 2*prefix[i] > prefix[j]: j += 1
            k = max(k, j)
            while k < len(nums) and 2*prefix[k] <= prefix[i] + prefix[-1]: k += 1
            ans += k - j 
        return ans % 1_000_000_007
```