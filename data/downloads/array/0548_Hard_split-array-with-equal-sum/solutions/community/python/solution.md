# Python - Simple Solution - O(n^2) - Beats 89%

**Author:** hugolatendresse
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-with-equal-sum/solutions/5482277/](https://leetcode.com/problems/split-array-with-equal-sum/solutions/5482277/)

---

# Approach
The secret is to iterate over the middle split, and then for every possible midpoint: 
* Check every possible first division. When the subtotals match between Q1 and Q2, add the value to a set
* Check every possible second division. When the subtotals match between Q1 and Q2, add the value to another set
* If the sets have a common element, return True

The key part is that the algorithm above is O(n^2) rather than O(n^3) because the first and third divisions are checked subsequently, rather than checking every possible combination. 

To calculate partial sums quickly, a cummulative sum array is built, and the difference from 2 elements in that array corresponds to a partial sum.

# Complexity
- Time complexity:
O(n^2)

# Code
```
class Solution:
    def splitArray(self, nums: List[int]) -> bool:
        n = len(nums)
        if n <= 6:
            return False
        
        sums = [nums[0]]
        for n2 in nums[1:]:
            sums.append(sums[-1] + n2)

        for j in range(3, n-3):
            possibleval1 = {sums[i-1] for i in range(1,j-1) if sums[i-1] == sums[j-1] - sums[i]}
            possibleval2 = {sums[k-1] - sums[j] for k in range(j+2,n-1) if sums[k-1] - sums[j] == sums[n-1] - sums[k]}
            if possibleval1 & possibleval2:
                return True
        return False
        
```