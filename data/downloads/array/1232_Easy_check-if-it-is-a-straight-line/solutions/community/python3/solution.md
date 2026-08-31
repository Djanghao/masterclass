# [Java/Python 3] check slopes, short code w/ explanation and analysis.

**Author:** rock
**Votes:** 317
**Link:** [https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/408984/](https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/408984/)

---

The slope for a line through any 2 points `(x0, y0)` and `(x1, y1)` is `(y1 - y0) / (x1 - x0)`; Therefore, for any given 3 points (denote the 3rd point as `(x, y)`), if they are in a straight line, the slopes of the lines from the 3rd point to the 2nd point and the 2nd point to the 1st point must be equal:
```
(y - y1) / (x - x1) = (y1 - y0) / (x1 - x0)
```
In order to avoid being divided by 0, use multiplication form:
```
(x1 - x0) * (y - y1) = (x - x1) * (y1 - y0) =>
dx * (y - y1) = dy * (x - x1), where dx = x1 - x0 and dy = y1 - y0
```

Now imagine connecting the 2nd points respectively with others one by one, Check if all of the slopes are equal.

```
    public boolean checkStraightLine(int[][] coordinates) {
        int x0 = coordinates[0][0], y0 = coordinates[0][1], 
            x1 = coordinates[1][0], y1 = coordinates[1][1];
        int dx = x1 - x0, dy = y1 - y0;
        for (int[] co : coordinates) {
            int x = co[0], y = co[1];
            if (dx * (y - y1) != dy * (x - x1))
                return false;
        }
        return true;
    }
```
```
    def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
        (x0, y0), (x1, y1) = coordinates[: 2]
        for x, y in coordinates:
            if (x1 - x0) * (y - y1) != (x - x1) * (y1 - y0):
                return False
        return True
```
or simpler:
```
    def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
        (x0, y0), (x1, y1) = coordinates[: 2]
        return all((x1 - x0) * (y - y1) == (x - x1) * (y1 - y0) for x, y in coordinates)
```

**Analysis**

Time: O(n), space: O(1), where n = coordinates.length.