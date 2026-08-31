# C# Binary Search

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5206797/](https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5206797/)

---

```csharp
public class Solution
{
    public int MaxPointsInsideSquare(int[][] points, string s)
    {
        var left = 0;
        var right = int.MaxValue;

        while (left < right)
        {
            var mid = left + (right - left) / 2;

            if (CountPointsInsideSquare(mid) >= 0)
                left = mid + 1;
            else
                right = mid;
        }

        var result = CountPointsInsideSquare(left - 1);
        return result >= 0 ? result : 0;

        int CountPointsInsideSquare(int length)
        {
            var tags = new HashSet<char>();

            for (var i = 0; i < points.Length; i++)
            {
                if (Math.Abs(points[i][0]) > length ||
                    Math.Abs(points[i][1]) > length)
                    continue;

                if (!tags.Add(s[i]))
                    return int.MinValue;
            }

            return tags.Count;
        }
    }
}
```