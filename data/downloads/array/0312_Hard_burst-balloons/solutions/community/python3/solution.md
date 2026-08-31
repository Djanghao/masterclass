# PYTHON BEGINNER | Brute force recursion -> Brute-Better Memoization -> DP

**Author:** kushagrabainsla
**Votes:** 18
**Link:** [https://leetcode.com/problems/burst-balloons/solutions/1659427/](https://leetcode.com/problems/burst-balloons/solutions/1659427/)

---

* dp[left][right] =  coins obtained from bursting all the balloons between left and right (not including left or right)
* dp[left][right] = max(nums[left] * nums[i] * nums[right] + dp[left][i] + dp[i][right]) for i in (left+1,right)

* If i is the index of the last balloon burst in (left, right), the coins that burst will get are nums[left] * nums[i] * nums[right], and to calculate dp[left][right], we also need to add the coins obtained from bursting balloons between left and i, and between i and right, i.e., dp[left][i] and dp[i][right]

```
# Brute force recursion
class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        nums = [1] + nums + [1]
        return self.recurse(nums, 0, len(nums)-1)
    
    def recurse(self, nums, left, right):
        
        res = 0
        for i in range(left+1, right):
            coins = nums[left] * nums[i] * nums[right]
            leftRes = self.recurse(nums, left, i)
            rightRes = self.recurse(nums, i, right)
            res = max(res, coins + leftRes + rightRes)
        
        return res

    
# Brute Better Memoization (69/70 Passed)
class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        nums = [1] + nums + [1]
        self.dp = [[-1 for _ in range(len(nums))] for _ in range(len(nums))]
        return self.recurse(nums, 0, len(nums)-1)
    
    def recurse(self, nums, left, right):
        
        if self.dp[left][right] != -1:
            return self.dp[left][right]
        
        res = 0
        for i in range(left+1, right):
            coins = nums[left] * nums[i] * nums[right]
            leftRes = self.recurse(nums, left, i)
            rightRes = self.recurse(nums, i, right)
            res = max(res, coins + leftRes + rightRes)
        
        self.dp[left][right] = res
        return res

    
# Top down DP (Accepted)
class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        nums = [1] + nums + [1]
        dp = [[0 for _ in range(len(nums))] for _ in range(len(nums))]
        
        for gap in range(len(nums)):
            for left in range(len(nums)-gap):
                right = left + gap
                
                res = 0
                for i in range(left+1, right):
                    coins = nums[left] * nums[i] * nums[right]
                    res = max(res, coins + dp[left][i] + dp[i][right])
                dp[left][right] = res
                
        return dp[0][len(nums)-1]
```
