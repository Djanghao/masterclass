# C# 100% faster solution

**Author:** Luchunpen
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/5665184/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/5665184/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```csharp []
public class Solution 
{
    public int NearestValidPoint(int x, int y, int[][] points) 
    {
        int result = -1;
        int dist = Int32.MaxValue;
        for (int i = 0; i < points.Length; i++)
        {
            int px = points[i][0];
            int py = points[i][1];

            if (px == x || py == y)
            {
                int d = Math.Abs(px - x) + Math.Abs(py - y);
                if (d < dist) 
                {
                    dist = d;
                    result = i;
                }
            }
        }

        return result;
    }
}
```