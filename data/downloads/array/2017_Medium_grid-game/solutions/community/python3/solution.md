# [Java/Python 3] Prefix and Suffix sum O(n) code, w/ brief explanation and analysis.

**Author:** rock
**Votes:** 17
**Link:** [https://leetcode.com/problems/grid-game/solutions/1486330/](https://leetcode.com/problems/grid-game/solutions/1486330/)

---

Key observation: **Robot 2 can ONLY choose the lower left part or the upper right part of the the column that Rob 1 traversed.** Therefore, we compute the *max values* of the two parts when traversing the two-cell-columns from left and right. The mininum out of the afore-mentioned *max values* is the solution.
```java
    public long gridGame(int[][] grid) {
        long ans = Long.MAX_VALUE, lowerLeft = 0, upperRight = IntStream.of(grid[0]).mapToLong(i -> i).sum();
        for (int i = 0; i < grid[0].length; ++i) {
            upperRight -= grid[0][i];
            ans = Math.min(ans, Math.max(upperRight, lowerLeft));
            lowerLeft += grid[1][i];
        }
        return ans;
    }
```
Per **@aravinth3108**'s suggestion, the following code might be more friendly to the beginners:

```java
    public long gridGame(int[][] grid) {
        long ans = Long.MAX_VALUE, lowerLeft = 0, upperRight = 0;
        for (int cell : grid[0]) {
            upperRight += cell;
        }
        for (int i = 0; i < grid[0].length; ++i) {
            upperRight -= grid[0][i];
            ans = Math.min(ans, Math.max(upperRight, lowerLeft));
            lowerLeft += grid[1][i];
        }
        return ans;
    }
```

----

```python
    def gridGame(self, grid: List[List[int]]) -> int:
        upper_right, lower_left, ans = sum(grid[0]), 0, math.inf
        for upper, lower in zip(grid[0], grid[1]):
            upper_right -= upper
            ans = min(ans, max(upper_right, lower_left))
            lower_left += lower
        return ans
```
**Analysis:**

Time: `O(n)`, space: `O(1)`, where `n = grid[0].length`.