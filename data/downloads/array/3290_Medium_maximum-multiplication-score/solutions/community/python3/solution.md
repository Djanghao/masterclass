# Python3 || 8 lines, dp  ||

**Author:** Spaulding_
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-multiplication-score/solutions/5791134/](https://leetcode.com/problems/maximum-multiplication-score/solutions/5791134/)

---


```python3 []
class Solution:
    def maxScore(self, a: List[int], b: List[int]) -> int:
        
        dp0 = dp1 = dp2 = dp3 = -inf
        a0, a1, a2, a3 = a

        for b_element in b:
            dp3 = max(dp3, dp2 + a3 * b_element)
            dp2 = max(dp2, dp1 + a2 * b_element)
            dp1 = max(dp1, dp0 + a1 * b_element)
            dp0 = max(dp0,       a0 * b_element)
    
        return dp3
```

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(b)`.