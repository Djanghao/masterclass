# [Python3] Welzl's algo

**Author:** ye15
**Votes:** 4
**Link:** [https://leetcode.com/problems/erect-the-fence-ii/solutions/1454664/](https://leetcode.com/problems/erect-the-fence-ii/solutions/1454664/)

---


```
class Solution:
    def outerTrees(self, trees: List[List[int]]) -> List[float]:
        trees = list(set((x, y) for x, y in trees)) # remove duplicates
        shuffle(trees) # randomized algo
        
        def fn(i, R): 
            """Solve smallest circle problem via Welzl's algorithm."""
            if len(R) == 3: # circle from 3 points
                (x0, y0), (x1, y1), (x2, y2) = R
                A = x0*(y1-y2) - y0*(x1-x2) + x1*y2 - x2*y1
                B = (x0*x0 + y0*y0)*(y2-y1) + (x1*x1 + y1*y1)*(y0-y2) + (x2*x2+y2*y2)*(y1-y0)
                C = (x0*x0 + y0*y0)*(x1-x2) + (x1*x1 + y1*y1)*(x2-x0) + (x2*x2+y2*y2)*(x0-x1)
                D = (x0*x0 + y0*y0)*(x2*y1-x1*y2) + (x1*x1+y1*y1)*(x0*y2-x2*y0) + (x2*x2+y2*y2)*(x1*y0-x0*y1)
                return (-B/(2*A), -C/(2*A), sqrt((B*B+C*C-4*A*D)/(4*A*A)))
            if i == len(trees): 
                if len(R) == 0: return (0, 0, 0)
                if len(R) == 1: return (R[0][0], R[0][1], 0)
                if len(R) == 2: 
                    (x0, y0), (x1, y1) = R
                    return ((x0+x1)/2, (y0+y1)/2, sqrt((x0-x1)**2+(y0-y1)**2)/2)
            x, y, r = fn(i+1, R)
            if (trees[i][0]-x)**2 + (trees[i][1]-y)**2 < r**2: return (x, y, r)
            return fn(i+1, R + [trees[i]])
            
			return fn(0, [])
```