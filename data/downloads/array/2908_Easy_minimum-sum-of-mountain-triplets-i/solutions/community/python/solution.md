# Beginner Friendly Easy Python Code

**Author:** harsha_2k3
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/4194885/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/4194885/)

---

# Code
```
class Solution:
    def minimumSum(self, nums: List[int]) -> int:
        
        if(len(nums) < 3):
            return -1
        
        min_sum = float('inf')
        
        for i in range(1,len(nums)-1):
            left_min = min(nums[:i])              # Maximum element on right side 
            right_min = min(nums[i+1:])           # Maximum element on left side 
            
            if(nums[i] > left_min and nums[i] > right_min):
                min_sum = min(min_sum , left_min + nums[i] + right_min)
                
        return min_sum if min_sum != float("inf") else -1
```

# Explanation

1. The class Solution defines a method minimumSum(), which takes an array of integers nums as input and returns the minimum possible sum of a mountain triplet of nums, or -1 if no such triplet exists.

2. If the length of nums is less than 3, then no mountain triplet can exist, so the function returns -1.

3. Initialize the variable min_sum to infinity. This will store the minimum possible sum of a mountain triplet found so far.

4. Iterate over the array nums from index 1 to index len(nums) - 2. For each index i, find the minimum elements on the left and right of i using the variables left_min and right_min, respectively.

5. If the element nums[i] is greater than both left_min and right_min, then it is a possible peak element of a mountain triplet. In this case, update the variable min_sum to the minimum of min_sum and the sum of left_min, nums[i], and right_min.

6. If min_sum is not equal to infinity, then a mountain triplet with minimum sum min_sum has been found. The function returns min_sum. Otherwise, the function returns -1 to indicate that no mountain triplet exists.


##### If you find my solution helpful and worthy, please consider upvoting my solution. Upvotes play a crucial role in ensuring that this valuable content reaches others and helps them as well.

##### Only your support motivates me to continue contributing more solutions and assisting the community further.

##### Thank You for spending your valuable time.