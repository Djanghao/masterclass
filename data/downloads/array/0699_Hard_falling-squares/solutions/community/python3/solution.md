# Python 3 || 9 lines,  bisect || T/S: 99% / 81%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/falling-squares/solutions/4049398/](https://leetcode.com/problems/falling-squares/solutions/4049398/)

---

```
class Solution:
    def fallingSquares(self, positions: List[List[int]]) -> List[int]:

        def helper(box: List[int])->int:

            l, h = box
            r = l + h
            
            i, j = bisect_right(pos, l), bisect_left (pos, r)

            res = h + max(hgt[i-1:j], default = 0)
            pos[i:j], hgt[i:j] = [l, r], [res, hgt[j - 1]]

            return res

       
        hgt, pos, res, mx = [0], [0], [], 0
        
        return accumulate(map(helper, positions), max)
```
[https://leetcode.com/problems/falling-squares/submissions/1271687553/](https://leetcode.com/problems/falling-squares/submissions/1271687553/)


I could be wrong, but I think that time complexity is *O*(*N*log*N*) and space complexity is *O*(*N*), in which *N* ~ `len(positions)`.