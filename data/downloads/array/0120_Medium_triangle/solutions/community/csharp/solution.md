# 🐌 C# - dp 3 solutions

**Author:** user7166Uf
**Votes:** 4
**Link:** [https://leetcode.com/problems/triangle/solutions/2145581/](https://leetcode.com/problems/triangle/solutions/2145581/)

---

#1 - top down
```
public class Solution
{
    public int MinimumTotal(IList<IList<int>> triangle)
    {
        int n = triangle.Count;
        int?[,] dp = new int?[n, n];
        return GetShortestPath(0, 0);

        int GetShortestPath(int row, int column)
        {
            if (row == n) return 0;
            if (column == row + 1) return int.MaxValue;

            return dp[row, column] ??= triangle[row][column] + Math.Min(GetShortestPath(row + 1, column), GetShortestPath(row + 1, column + 1));
        }
    }
}
```

#2 - bottom up with extra O(N) memory 
```
public class Solution
{
    public int MinimumTotal(IList<IList<int>> triangle)
    {
        int n = triangle.Count;
        int[] previous = new int[n];
        int[] current = triangle[n - 1].ToArray();

        for (int row = n - 2; row >= 0; row--)
        {
            (previous, current) = (current, previous);
            for (int column = 0; column <= row; column++)
            {
                current[column] = triangle[row][column] + Math.Min(previous[column], previous[column + 1]);
            }
        }

        return current[0];
    }
}
```

#3 - bottom up with no extra memory
```
public class Solution
{
    public int MinimumTotal(IList<IList<int>> triangle)
    {
        for (int row = triangle.Count - 2; row >= 0; row--)
        {
            for (int column = 0; column <= row; column++)
            {
                triangle[row][column] += Math.Min(triangle[row + 1][column], triangle[row + 1][column + 1]);
            }
        }

        return triangle[0][0];
    }
}
```