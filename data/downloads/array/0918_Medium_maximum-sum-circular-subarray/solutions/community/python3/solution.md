# 3 questions, 1 approach Python

**Author:** MiKueen
**Votes:** 50
**Link:** [https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/775875/](https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/775875/)

---

## **Kadane's Algorithm**

**Problem 918 : [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/)**

```python
class Solution:
    def maxSubarraySumCircular(self, A: List[int]) -> int:
    
        # Method 1 : Kadane's Algorithm
        if max(A) <= 0:
            return max(A)
        
        max_sum = curr_max = min_sum = curr_min = A[0] 
        
        for i in range(1, len(A)): 
            curr_max = max(A[i], curr_max + A[i]) 
            max_sum = max(max_sum, curr_max)
            curr_min = min(A[i], curr_min + A[i]) 
            min_sum = min(min_sum, curr_min)
            
        return max(max_sum, sum(A) - min_sum)
            
        '''
        # Method 2 : Dynamic Programming
        if max(A) <= 0:
            return max(A)
            
        max_dp = [i for i in A]
        min_dp = [i for i in A]
        
        for i in range(1,len(A)):
            if max_dp[i-1] > 0:
                max_dp[i] += max_dp[i-1]
            if min_dp[i-1] < 0:
                min_dp[i] += min_dp[i-1]

        return max(max(max_dp), sum(A) - min(min_dp))
		'''
		
```


**Problem 152 : [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)**

```python
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        if not nums:
            return 0
        max_prod = prev_max = prev_min =  nums[0] 
        for i in range(1, len(nums)): 
            curr_min = min(prev_max * nums[i], prev_min * nums[i], nums[i]) 
            curr_max = max(prev_max * nums[i], prev_min * nums[i], nums[i])
            prev_min, prev_max = curr_min, curr_max
            max_prod = max(curr_max, max_prod)    
        return max_prod
		
```


**Problem 53 : [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)**

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = curr = nums[0] 
        for i in range(1, len(nums)): 
            curr = max(nums[i], curr + nums[i]) 
            max_sum = max(max_sum, curr)    
        return max_sum 
		
```
