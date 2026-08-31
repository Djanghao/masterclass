# Python3 easy Solution

**Author:** hakkiot
**Votes:** 9
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/3773085/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/3773085/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$0(n)$$

# Code
```
class Solution:
    def sumOfSquares(self, nums: List[int]) -> int:
        #count of the sum of squares
        count=0
        #length of nums
        n=len(nums) 
        for i in range(0,n) :
            if  n%(i+1)==0:
                count+=nums[i]**2
        return count
```