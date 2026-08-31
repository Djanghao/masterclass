# C# | Sort

**Author:** CDev
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/2897959/](https://leetcode.com/problems/maximum-star-sum-of-a-graph/solutions/2897959/)

---


# Code
```
public class Solution 
{
    public int MaxStarSum(int[] vals, int[][] edges, int k)
    {
        int n = vals.Length;
        List<int>[] neghbours = new List<int>[n];
        for (int i = 0; i < n; i++)
        {
            neghbours[i] = new List<int>();
        }
        foreach (var edge in edges)
        {
            neghbours[edge[0]].Add(vals[edge[1]]);
            neghbours[edge[1]].Add(vals[edge[0]]);
        }

        int sumMax = int.MinValue;
        for (int i = 0; i < n; i++)
        {
            int curSum = vals[i];
            curSum += neghbours[i].OrderByDescending(n => n).Take(k).Where(n => n > 0).Sum();
            sumMax = Math.Max(sumMax, curSum);
        }
        return sumMax;
    }
}
```