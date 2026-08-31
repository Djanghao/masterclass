# [Python3] compute xor O(MNlog(MN)) | O(MNlogK) | O(MN)

**Author:** ye15
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/1032117/](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/1032117/)

---

**Algo**
Compute `xor` of at `(i, j)` as `xor[i][j] = xor[i-1][j] ^ xor[i][j-1] ^ xor[i-1][j-1] ^ matrix[i][j]`. The return the `k`th largest among observed. 

**Implementation**
```
class Solution:
    def kthLargestValue(self, matrix: List[List[int]], k: int) -> int:
        m, n = len(matrix), len(matrix[0]) # dimensions 
        
        ans = []
        for i in range(m): 
            for j in range(n): 
                if i: matrix[i][j] ^= matrix[i-1][j]
                if j: matrix[i][j] ^= matrix[i][j-1]
                if i and j: matrix[i][j] ^= matrix[i-1][j-1]
                ans.append(matrix[i][j])
        return sorted(ans)[-k] 
```

**Analysis**
Time complexity `O(MNlog(MN))` (`O(MN)` is possible via quick select)
Space complexity `O(MN)`

Edited on 1/24/2021
Adding two more implementation for improved time complexity 
`O(MNlogK)` time & `logK` space 
```
class Solution:
    def kthLargestValue(self, matrix: List[List[int]], k: int) -> int:
        m, n = len(matrix), len(matrix[0]) # dimensions 
        
        pq = []
        for i in range(m): 
            for j in range(n): 
                if i: matrix[i][j] ^= matrix[i-1][j]
                if j: matrix[i][j] ^= matrix[i][j-1]
                if i and j: matrix[i][j] ^= matrix[i-1][j-1]
                heappush(pq, matrix[i][j])
                if len(pq) > k: heappop(pq)
        return pq[0]
```


`O(MN)` time & `O(MN)` space 
```
class Solution:
    def kthLargestValue(self, matrix: List[List[int]], k: int) -> int:
        m, n = len(matrix), len(matrix[0]) # dimensions 
        
        vals = []
        for i in range(m): 
            for j in range(n): 
                if i: matrix[i][j] ^= matrix[i-1][j]
                if j: matrix[i][j] ^= matrix[i][j-1]
                if i and j: matrix[i][j] ^= matrix[i-1][j-1]
                vals.append(matrix[i][j])
        
        def part(lo, hi): 
            """Partition vals from lo (inclusive) to hi (exclusive)."""
            i, j = lo+1, hi-1
            while i <= j: 
                if vals[i] < vals[lo]: i += 1
                elif vals[lo] < vals[j]: j -= 1
                else: 
                    vals[i], vals[j] = vals[j], vals[i]
                    i += 1
                    j -= 1
            vals[lo], vals[j] = vals[j], vals[lo]
            return j 
        
        lo, hi = 0, len(vals)
        while lo < hi: 
            mid = part(lo, hi)
            if mid + k < len(vals): lo = mid + 1
            else: hi = mid
        return vals[lo]
```