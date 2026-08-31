# Clean and simple solution using heap(100% faster)

**Author:** KmrVikas
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3420127/](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3420127/)

---

```class Solution:
    def findPrefixScore(self, nums: List[int]) -> List[int]:
        heap = [-nums[0]]
        result = []
        runningSum = 0
        for num in nums:
            maxSum = max(num, -1 * heapq.heappop(heap))
            result.append(runningSum + num + maxSum)
            runningSum += maxSum+num
            heappush(heap,- maxSum)
        return result
        
        
