# ✅ C# | readable solution 🚅 faster than 62% 💻 less than 77%

**Author:** Thanat05
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-triangle-area/solutions/5712721/](https://leetcode.com/problems/largest-triangle-area/solutions/5712721/)

---

![image.png](./images/0.png)

**Don't hesitate to suggest or ask bellow about something that you don't understand**

```csharp []
public class Solution {
    public double LargestTriangleArea(int[][] points) {
        double ans = 0;
        for (int i = 0; i < points.Length - 2; i++)
            for (int j = i + 1; j < points.Length - 1; j++)
                for (int k = j + 1; k < points.Length; k++)
                {
                    double area = Math.Abs(points[i][0] * (points[j][1] - points[k][1]) +
                                            points[j][0] * (points[k][1] - points[i][1]) +
                                            points[k][0] * (points[i][1] - points[j][1])) / 2.0;
                    ans = area > ans ? area : ans;
                }
        return ans;
    }
}
```

If you like it don't forget to **upvote!**