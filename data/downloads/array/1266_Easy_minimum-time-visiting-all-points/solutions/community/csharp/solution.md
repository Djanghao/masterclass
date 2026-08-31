# Simplest C# solution

**Author:** zaurcfr
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4355571/](https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4355571/)

---

# Code
```
public class Solution {
    public int MinTimeToVisitAllPoints(int[][] points) {
        int distance = 0;
        for (int i = 0; i < points.Length - 1; i++)
        {
            distance += Math.Max(Math.Abs(points[i + 1][0] - points[i][0]), Math.Abs(points[i + 1][1] - points[i][1]));
        }
        return distance;
    }
}
```