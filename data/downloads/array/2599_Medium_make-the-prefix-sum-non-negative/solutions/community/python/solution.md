# Easy Understand Minheap solution Python

**Author:** Chrishu5777
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/3353225/](https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/3353225/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution(object):
    def makePrefSumNonNegative(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        res = 0
        curr = 0
        heap = []
        for n in nums:    
            if n < 0:
                heapq.heappush(heap, n)
            curr += n
            if curr < 0:
                res += 1
                curr -= heapq.heappop(heap)
        return res
```