# python3  ||    1620. Coordinate With Maximum Network Quality

**Author:** Spaulding_
**Votes:** 7
**Link:** [https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/2640317/](https://leetcode.com/problems/coordinate-with-maximum-network-quality/solutions/2640317/)

---

```
class Solution:
    def bestCoordinate(self, towers: List[List[int]], radius: int) -> List[int]:

        mx, ans = -1, [0,0]

        def qualFac(dx, dy):
            nonlocal radius
            dist = sqrt(dx*dx+dy*dy)
            return 0 if dist > radius else 1/(1+dist)    

        for x in range(51):
            for y in range(51):
                sm = sum(floor(q*qualFac(abs(x - tx),abs(y - ty))) for tx, ty, q in towers)
                if sm > mx: mx, ans = sm, [x,y]

        return ans