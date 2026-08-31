# C# solution

**Author:** ergosm
**Votes:** 1
**Link:** [https://leetcode.com/problems/line-reflection/solutions/3524569/](https://leetcode.com/problems/line-reflection/solutions/3524569/)

---

```
public class Solution {
    public bool IsReflected(int[][] points)
    {
        var minX = 1_000_000_000;
        var maxX = -1_000_000_000;
        var set = new HashSet<(int X, int Y)>();

        for (int i = 0; i < points.Length; i++)
        {
            set.Add((points[i][0], points[i][1]));
            minX = Math.Min(points[i][0], minX);
            maxX = Math.Max(points[i][0], maxX);
        }

        var med = minX + (maxX - minX) / 2.0;

        foreach(var entry in set){
            if(!set.Contains(((int)(2 * med - entry.X), entry.Y))){
                return false;
            }
        }

        return true;
    }
}
```