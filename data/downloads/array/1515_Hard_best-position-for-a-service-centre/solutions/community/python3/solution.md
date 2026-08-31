# [Python3] geometric median

**Author:** ye15
**Votes:** 77
**Link:** [https://leetcode.com/problems/best-position-for-a-service-centre/solutions/731717/](https://leetcode.com/problems/best-position-for-a-service-centre/solutions/731717/)

---

This problem is to compute a quantity called "geometric median". There are algorithms dedicated to solve such problems such as Weiszfeld's algorithm. But those algorithms leverages on statistical routines such as weighted least squares. 

Since this is a 2d toy problem, we could use some "brute force" grid searching method to find an approximation. Suppose you think `x, y` is a candidate. Then, you could perturb the point along `x` and `y` by a small amount (`chg` in the implementation) and check if the new point provides a smaller distance. If so, the new point becomes the new candidate. 

The trick is to progressively decrease `chg` to a satisfying precision (`1e-5` in this setting). One could reduce it by half or any chosen factor. In the meantime, centroid is a good starting point. 

```
class Solution:
    def getMinDistSum(self, positions: List[List[int]]) -> float:
        #euclidean distance 
        fn = lambda x, y: sum(sqrt((x-xx)**2 + (y-yy)**2) for xx, yy in positions)
        #centroid as starting point
        x = sum(x for x, _ in positions)/len(positions)
        y = sum(y for _, y in positions)/len(positions)
        
        ans = fn(x, y)
        chg = 100 #change since 0 <= positions[i][0], positions[i][1] <= 100
        while chg > 1e-6: #accuracy within 1e-5
            zoom = True
            for dx, dy in (-1, 0), (0, -1), (0, 1), (1, 0):
                xx = x + chg * dx
                yy = y + chg * dy
                dd = fn(xx, yy)
                if dd < ans: 
                    ans = dd 
                    x, y = xx, yy
                    zoom = False 
                    break 
            if zoom: chg /= 2
        return ans 
```