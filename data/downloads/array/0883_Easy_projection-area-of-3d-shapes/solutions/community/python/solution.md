# Python Easy Solution

**Author:** letap
**Votes:** 4
**Link:** [https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/1761504/](https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/1761504/)

---

```
 n = len(grid)
        x = sum(max(grid[i][j] for i in range(n)) for j in range(n)) 
        y = sum(max(grid[j][i] for i in range(n)) for j in range(n)) 
        z = sum(grid[i][j] > 0 for i in range(n) for j in range(n)) 
        return sum([x,y,z])
```