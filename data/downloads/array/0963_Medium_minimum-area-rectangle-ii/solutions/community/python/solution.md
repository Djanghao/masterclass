# Python 76%+ | Quick Search for Diamond, Determine Rectangle by Diagonal Distances

**Author:** steve-jokes
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/2765389/](https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/2765389/)

---

```python
def dist_pow2(x1, y1, x2, y2): return (x2 - x1)**2 + (y2 - y1)**2
def dist(x1, y1, x2, y2): return dist_pow2(x1, y1, x2, y2)**0.5

class Solution:
    def minAreaFreeRect(self, points):
        L, m = len(points), float('inf')

        quick_search = {(x, y) for x, y in points}

        for i in range(L):
            for j in range(i + 1, L):
                for k in range(j + 1, L):
                    x1, y1 = points[i] # calculate point4 to form a diamond by previous three
                    x2, y2 = points[j] # we only check case when x4 is latter occured than x3
                    x3, y3 = points[k] # becourse the case when x4 is earlier occured than x3 will be covered already
                    x4, y4 = (x3 + (x2 - x1), y3 + (y2 - y1))

                    if (x4, y4) in quick_search:  # look for existence of dimond shape
                        # if two diagonals' length are equal, we got a rectangel
                        if dist_pow2(x1, y1, x4, y4) == dist_pow2(x2, y2, x3, y3):
                            # calculate area by multipling any two adjacent edge's length
                            area = dist(x1, y1, x2, y2) * dist(x1, y1, x3, y3)
                            m = min(m, area)  # keep track of min_area

        return m if m != float('inf') else 0
```