# [Java/C++/Python] Solution with Explanation

**Author:** lee215
**Votes:** 306
**Link:** [https://leetcode.com/problems/where-will-the-ball-fall/solutions/988576/](https://leetcode.com/problems/where-will-the-ball-fall/solutions/988576/)

---

# **Explanation**
We drop the ball at `grid[0][i]`
and track ball position `i1`, which initlized as `i`.

An observation is that,
if the ball wants to move from `i1` to `i2`,
we must have the board direction `grid[j][i1] == grid[j][i2]`
<br>

# **Complexity**
Time `O(mn)`
Space `O(n)`
<br>

**Java:**
```java
    public int[] findBall(int[][] grid) {
        int m = grid.length, n = grid[0].length, res[] = new int[n];
        for (int i = 0; i < n; ++i) {
            int i1 = i, i2;
            for (int j = 0; j < m; ++j) {
                i2 = i1 + grid[j][i1];
                if (i2 < 0 || i2 >= n || grid[j][i2] != grid[j][i1]) {
                    i1 = -1;
                    break;
                }
                i1 = i2;
            }
            res[i] = i1;
        }
        return res;
    }
```

**C++:**
```cpp
    vector<int> findBall(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        vector<int> res;
        for (int i = 0; i < n; ++i) {
            int i1 = i, i2;
            for (int j = 0; j < m; ++j) {
                i2 = i1 + grid[j][i1];
                if (i2 < 0 || i2 >= n || grid[j][i2] != grid[j][i1]) {
                    i1 = -1;
                    break;
                }
                i1 = i2;
            }
            res.push_back(i1);
        }
        return res;
    }
```

**Python:**
```py
    def findBall(self, grid):
        m, n = len(grid), len(grid[0])

        def test(i):
            for j in xrange(m):
                i2 = i + grid[j][i]
                if i2 < 0 or i2 >= n or grid[j][i2] != grid[j][i]:
                    return -1
                i = i2
            return i
        return map(test, range(n))
```
