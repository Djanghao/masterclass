# [Python] Write all XOR Scores

**Author:** awice
**Votes:** 15
**Link:** [https://leetcode.com/problems/maximum-xor-score-subarray-queries/solutions/5719042/](https://leetcode.com/problems/maximum-xor-score-subarray-queries/solutions/5719042/)

---

Write, similar to pascal's triangle, all XOR scores.  For an `N=6` array `[a,b,c,d,e,f]` it looks like this: (`ab` denotes `a XOR b`)

```
a    b    c    d    e    f
  ab   bc   cd   de   ef
    ac   bd   ce   df
     abcd bcde cdef
        ae   bf
         abef
```

Let `B` be this triangle.  All queries correspond to querying the maximum value of a triangle with one edge on the first row.  We can change each value of the triangle to be the maximum of all its ancestors.  For example, `bd` would be `max(bd, bc, cd, b, c, d)`.

# Code
```python3 []
class Solution:
    def maximumSubarrayXor(self, A: List[int], queries: List[List[int]]) -> List[int]:
        B = [A]
        while len(B[-1]) != 1:
            B.append([B[-1][i] ^ B[-1][i+1] for i in range(len(B[-1]) - 1)])
        
        for i in range(1, len(B)):
            for j in range(len(B[i])):
                B[i][j] = max(B[i][j], B[i-1][j], B[i-1][j+1])
        
        return [B[r-l][l] for l, r in queries]        
```