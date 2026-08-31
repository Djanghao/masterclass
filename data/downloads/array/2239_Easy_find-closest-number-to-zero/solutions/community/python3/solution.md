# 2239. Find Closest Number to Zero || Python 3 Solution || Please Upvote

**Author:** FirewallFox
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-closest-number-to-zero/solutions/5551312/](https://leetcode.com/problems/find-closest-number-to-zero/solutions/5551312/)

---


# Complexity
- Time complexity:
 $$O(n)$$

- Space complexity:
 $$O(1)$$

# Code
```
class Solution:
    def findClosestNumber(self, nums: List[int]) -> int:
        CloseNum=nums[0]

        for i in nums:
            if abs(i) < abs(CloseNum):
                CloseNum = i

        if CloseNum < 0 and abs(CloseNum) in nums:
            return abs(CloseNum)
        return CloseNum
        
```