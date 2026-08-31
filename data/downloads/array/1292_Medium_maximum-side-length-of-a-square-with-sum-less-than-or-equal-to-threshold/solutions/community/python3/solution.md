# [Python3] prefix sum & binary search

**Author:** ye15
**Votes:** 21
**Link:** [https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/451998/](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/451998/)

---

Algorithm: 
Build a `(m+1)x(n+1)` matrix of prefix sums of given matrix where `prefix[i][j] = sum(mat[:i][:j])`. And search for maximum `k` such that `sum(mat[i:i+k][j:j+k])` not exceeding threshold. Notice:
1) `prefix[i+1][j+1] = prefix[i][j+1] + prefix[i+1][j] - prefix[i][j] + mat[i][j]`. 
2) `sum(mat[i:i+k][j:j+k]) = prefix[i+k][j+k] - prefix[i][j+k] - prefix[i+k][j] + prefix[i][j]`. 

Implementation (100%): 
```
from itertools import product

class Solution:
    def maxSideLength(self, mat: List[List[int]], threshold: int) -> int:
        """
        prefix[i][j] = prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1] + mat[i][j]
        """
        m, n = len(mat), len(mat[0])
        #build prefix sum 
        prefix = [[0]*(n+1) for _ in range(m+1)]
        
        for i, j in product(range(m), range(n)):
            prefix[i+1][j+1] = prefix[i+1][j] + prefix[i][j+1] - prefix[i][j] + mat[i][j]
        
        def below(k): 
            """reture true if there is such a sub-matrix of length k"""
            for i, j in product(range(m+1-k), range(n+1-k)):
                if prefix[i+k][j+k] - prefix[i][j+k] - prefix[i+k][j] + prefix[i][j] <= threshold: return True
            return False 
                
        #binary search
        lo, hi = 1, min(m, n)
        while lo <= hi: 
            mid = (lo + hi)//2
            if below(mid): lo = mid + 1
            else: hi = mid - 1
            
        return hi
```
Analysis: 
Time complexity `O(MNlog(min(M,N))`
Space complexity `O(MN)`