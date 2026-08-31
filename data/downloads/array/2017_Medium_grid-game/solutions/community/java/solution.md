# Prefix/Suffix Sum

**Author:** votrubac
**Votes:** 84
**Link:** [https://leetcode.com/problems/grid-game/solutions/1486288/](https://leetcode.com/problems/grid-game/solutions/1486288/)

---

Since the robots cannot go up, we need to find the best point `i` for the first robot to go down. 

For the second robot, we only have two choices - go down right away, or stay up till the end.

For a point `i`, the second robot can either collect `bottom = sum(grid[1][0] .. grid[1][i - 1])` if it goes down, or `top = sum(grid[0][i + 1] ... grid[0][n - 1])` otherwise.

We can compute those values using prefix/suffix sum in O(1), and then find the minimum of `max(top, bottom)`.

> Note that the prefix/suffix sum can overflow int, so we need to use a 64-bit integer in C++ and Java.

**Python 3**
```python
class Solution:
    def gridGame(self, g: List[List[int]]) -> int:
        top, bottom, res = sum(g[0]), 0, math.inf
        for g0, g1 in zip(g[0], g[1]):
            top -= g0
            res = min(res, max(top, bottom))
            bottom += g1
        return res
```

**Java**
```java
public long gridGame(int[][] g) {
    long top = Arrays.stream(g[0]).asLongStream().sum(), bottom = 0, res = Long.MAX_VALUE;
    for(int i = 0; i < g[0].length; ++i) {
        top -= g[0][i];
        res = Math.min(res, Math.max(top, bottom));
        bottom += g[1][i];
    }
    return res;        
}
```

**C++**
```cpp
long long gridGame(vector<vector<int>>& g) {
    long long top = accumulate(begin(g[0]), end(g[0]), 0ll), bottom = 0, res = LLONG_MAX;
    for(int i = 0; i < g[0].size(); ++i) {
        top -= g[0][i];
        res = min(res, max(top, bottom));
        bottom += g[1][i];
    }
    return res;
}
```