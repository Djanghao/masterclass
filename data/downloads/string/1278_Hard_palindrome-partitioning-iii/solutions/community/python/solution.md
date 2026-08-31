# Python DP recursive solution with explanation

**Author:** gins1
**Votes:** 2
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iii/solutions/1017255/](https://leetcode.com/problems/palindrome-partitioning-iii/solutions/1017255/)

---

```
from functools import lru_cache as cache
class Solution:
    def palindromePartition(self, s: str, k: int) -> int:
        
        '''
        Write a function to get min number of letters to change to make a string a palindrome.
        
        Recursive function: for each prefix, min_change(prefix) + helper(suffix, count - 1). 
        
        If count is 1, return min_change(prefix).
        If count is higher than the length of the prefix, there are no possible solutions, so return inf to discourage this choice. 
        Get min for all options.
        
        Use cache to reuse answers.
        
        Use indices instead of substrings, to save time spent string slicing and to save space in cache keys.
        (Substring solution commented out below).
        '''
        
        @cache(None)
        def min_change(l, r):
            count = 0
            
            while l < r:
                if s[l] != s[r]:
                    count += 1
                l += 1
                r -= 1
            
            return count
        
        @cache(None)
        def helper(i, j, count):
            if (j - i + 1) < count:
                return float('inf')
            
            if count == 1:
                return min_change(i, j)
            
            ans = float('inf')
            
            for x in range(i, j):
                tmp = min_change(i, x) + helper(x+1, j, count - 1)
                ans = min(ans, tmp)
                
            return ans
        
        return helper(0, len(s)-1, k)
    
# This is what the helper function would look like with string slicing.
# I find this easier to write at first, then change it to use indices. 
        
#         def helper(prefix, count):
#             if len(prefix) < count:
#                 return float('inf')
            
#             if count == 1:
#                 return min_change(prefix)
            
#             ans = float('inf')
            
#             for i in range(1, len(prefix)+1):
#                 tmp = min_change(prefix[:i]) + helper(prefix[i:], count - 1)
#                 ans = min(ans, tmp)
                
#             return ans
        
#         return helper(s, k)
```