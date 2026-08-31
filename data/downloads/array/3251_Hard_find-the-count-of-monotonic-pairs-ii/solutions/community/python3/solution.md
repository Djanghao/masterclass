# Python 3 || 9 lines, no arrays  || T/S: 99% / 81%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5623528/](https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5623528/)

---


```
class Solution:
    def countOfPairs(self, nums: List[int]) -> int:

        n, mn = len(nums), nums.pop(0)
        num1, num2 = 0, mn
    
        for num in nums:
            if num < num1: return 0

            if num > num1 + num2: 
                num1 = num - num2  

            num2 = num - num1

            if num2 < mn: mn = num2
        
        return comb(n + mn, mn) % 1_000_000_007
```
[https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/submissions/1352454766/](https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/submissions/1352454766/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(nums)`.