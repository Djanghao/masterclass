# Python 3   ||   2 lines,  geometry      ||   T/S: 99% / 93%

**Author:** Spaulding_
**Votes:** 26
**Link:** [https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4521007/](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4521007/)

---


```
class Solution:
    def areaOfMaxDiagonal(self, dimensions: List[List[int]]) -> int:

        a,b = max(dimensions, 
                key = lambda x: (x[0]*x[0]+x[1]*x[1], (x[0]*x[1])))

        return a*b
```
[https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/submissions/1139186165/](http://)


I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(dimensions)`.