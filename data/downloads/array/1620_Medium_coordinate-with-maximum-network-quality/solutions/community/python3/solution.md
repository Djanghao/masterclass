# [Python3] enumerate all candidates

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/1103762/](https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/1103762/)

---


```
class Solution:
    def bestCoordinate(self, towers: List[List[int]], radius: int) -> List[int]:
        mx = -inf
        for x in range(51):
            for y in range(51): 
                val = 0
                for xi, yi, qi in towers: 
                    d = sqrt((x-xi)**2 + (y-yi)**2)
                    if d <= radius: val += int(qi/(1 + d))
                if val > mx: 
                    ans = [x, y]
                    mx = val
        return ans 
```