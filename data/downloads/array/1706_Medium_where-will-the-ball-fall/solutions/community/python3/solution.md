# [Java/Python 3] Check the corresponding slope of its neighbor, w/ brief explanation and analysis..

**Author:** rock
**Votes:** 35
**Link:** [https://leetcode.com/problems/where-will-the-ball-fall/solutions/988195/](https://leetcode.com/problems/where-will-the-ball-fall/solutions/988195/)

---

**Q & A**
Q1: Can you pls explain how you are finding the next cell. 
A1: I believe the problem description intentionally gives the hint: slopes of `1` and `-1` for sliding to right and left. Therefore, adding the corresponding displacement, `slope * 1`, to current `column` will get the correct `column` of the next row; Also, the same slope of its neighbor is needed in order to avoid being stuck.

Q2: Could you please explain more on the
```
grid[r][x] != slope) { // Stuck on the the neighbor?
```
part?
A2:  Ball will tend to fall right (slope = grid[r][x] = 1) or left (slope = grid[r][x] = -1), it need the corresponding neighbor's same tendency (or slope) to fall through, otherwise get stuck. 
e.g.,
grid[r][x] = 1, ball will tend to fall right and we need to check right neighbor's slope grid[r][x + 1]; If grid[r][x + 1] = 1, then the ball will fall right to the next row at (r + 1, x + 1), otherwise get stuck at (r, x).

Rewrite the code as following might be helpful to understand:
```
    public int[] findBall(int[][] grid) {
        int n = grid[0].length;
        int[] ans = new int[n];
        outer:
        for (int c = 0, m = grid.length; c < n; ++c) {
            int x = c;
            for (int r = 0; r < m; ++r) {
                int xNeighbor = x + grid[r][x];
                // Stuck on the left, right boundaries or on the neighbor? 
                if (xNeighbor < 0 || xNeighbor >= n || grid[r][x] != grid[r][xNeighbor]) {
                    ans[c] = -1;
                    continue outer;
                }
                x = xNeighbor;
            }
            ans[c] = x; 
        }
        return ans;        
    }
```
**End of Q & A**

Check if the corresponding slope of its neighbor is same: if yes, go to next row, otherwise stuck.
```java
    public int[] findBall(int[][] grid) {
        int n = grid[0].length;
        int[] ans = new int[n];
        outer:
        for (int c = 0, m = grid.length; c < n; ++c) {
            int x = c;
            for (int r = 0; r < m; ++r) {
                int slope = grid[r][x];
                x += slope;
                if (x < 0 || x >= n || grid[r][x] != slope) { // Stuck on the left, right boundaries or on the neighbor?
                    ans[c] = -1;
                    continue outer;
                }
            }
            ans[c] = x; 
        }
        return ans;
    }
```
```python
    def findBall(self, grid: List[List[int]]) -> List[int]:
        m, n = map(len, (grid, grid[0]))
        ans = []
        for c in range(n):
            x = c
            for r in range(m):
                slope = grid[r][x]
                x += grid[r][x]
                if x < 0 or x >= n or grid[r][x] != slope:
                    ans.append(-1)
                    break    
            else:        
                ans.append(x)
        return ans
```

**Analysis:**

Time: O(m * n), space: O(n).