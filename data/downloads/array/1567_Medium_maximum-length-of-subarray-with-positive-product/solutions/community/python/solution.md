# [Python] Easy to understand DP

**Author:** tomzy
**Votes:** 101
**Link:** [https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/819432/](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/819432/)

---

**Algorithm:**

We can simplify the problem:
1. subarry is continuous, so we can transfer the problem to: For each index **i** n **nums** , what is the max length of subarray (ending with index i) With positive product. Then we can iterate every answer for all indexes to get the result for original question.
2. We know that: `positive_number * positive_number` is positive, `positive_number * negative_number` is negative, `negative_number * negative_number` is positive. 

Let's define:
`dp[i][0] : max length of subarray ending with index i With positive product`
`dp[i][1] : max length of subarray ending with index i With negative product`

In order to get the answer for current index, we need **dp[i - 1][0]** and **dp[i - 1][1]** to form a new subarray.

**Implementation:**

define a 2D array with length n

Base case would be: when index is 0, only one number can be used

Loop through the array, for the new number we have:
1.  if current number is positive, we know we can definitely form a positive subarry, the length is at least 1:
		`[previous positive subarray] + [current number positive]`
2.  if current number is positive, we know we can form a negative subarray if for previous index, negative subarray exists. Otherwise we can't form a negetive subarray ending with current number
		`[previous negative subarray] + [current number positive]`
3.  if current number is negative, we know we can definitely form a negative subarry, the length is at least 1:
		`[previous positive subarray] + [current number negative]`
4.  if current number is negative, we know we can form a positive subarray if for previous index, negative subarray exists. Otherwise we can't form a positive subarray ending with current number
		`[previous negative subarray] + [current number negative]`


```
    def getMaxLen(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        dp = [[0] * 2 for _ in range(n)]   
        # dp[i][0] : max length of subarray ending with index i With positive product   
		# dp[i][1] : max length of subarray ending with index i With negative product 
		
        # Base case: when index is 0, only one number can be used
        if nums[0] > 0:
            dp[0][0] = 1
        
        if nums[0] < 0:
            dp[0][1] = 1
            
        res = dp[0][0]
        
        for i in range(1, n):
            cur = nums[i]
            
            if cur > 0:
                dp[i][0] = dp[i - 1][0] + 1
                if dp[i - 1][1] > 0: # if previous negative subarray exists
                    dp[i][1] = max(dp[i][1], dp[i - 1][1] + 1)
            if cur < 0:
                dp[i][1] = dp[i - 1][0] + 1
                if dp[i - 1][1] > 0: # if previous negative subarray exists
                    dp[i][0] = max(dp[i][0], dp[i - 1][1] + 1)
                    
            res = max(res, dp[i][0])
            
        return res
```
Space: **O(n)** Time: **O(n)**


Furthermore, we can use rotating array to reduce the space complexity:
```
    def getMaxLen(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        dp = [0] * 2

        if nums[0] > 0:
            dp[0] = 1
        
        if nums[0] < 0:
            dp[1] = 1
            
        res = dp[0]
        
        for i in range(1, n):
            cur = nums[i]
            tmp = [0] * 2
            if cur > 0:
                tmp[0] = dp[0] + 1
                if dp[1] > 0:
                    tmp[1] = max(tmp[1], dp[1] + 1)
            elif cur < 0:
                tmp[1] = dp[0] + 1
                if dp[1] > 0:
                    tmp[0] = max(tmp[0], dp[1] + 1)
            dp = tmp
            res = max(res, dp[0])
            
        return res
```
Space: **O(1)** Time: **O(n)**