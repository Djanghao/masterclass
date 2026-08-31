# Cannot beat TLE on C#

**Author:** mnaoumov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/6182791/](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/6182791/)

---

Cannot pass TLE in C#

Interestingly, I took the `Java` version from the Solution, and it passed, but rewriting it word by word to C#, it gets TLE on test 952/952.

The rewritten version

```csharp
public class Solution
{
    public int[] LeftmostBuildingQueries(int[] heights, int[][] queries)
    {
        var monoStack = new List<(int height, int index)>();
        var result = new int[queries.Length];
        Array.Fill(result, -1);
        var newQueries = new List<List<(int height, int index)>>();

        for (var i = 0; i < heights.Length; i++)
        {
            newQueries.Add(new List<(int height, int index)>());
        }

        for (var i = 0; i < queries.Length; i++)
        {
            var a = queries[i][0];
            var b = queries[i][1];
            if (a > b)
            {
                (a, b) = (b, a);
            }
            if (heights[b] > heights[a] || a == b)
            {
                result[i] = b;
            }
            else
            {
                newQueries[b].Add((heights[a], i));
            }
        }

        for (var i = heights.Length - 1; i >= 0; i--)
        {
            foreach (var (height, index) in newQueries[i])
            {
                var position = Search(height, monoStack);
                if (position < monoStack.Count && position >= 0)
                {
                    result[index] = monoStack[position].index;
                }
            }

            while (monoStack.Count > 0 && monoStack[^1].height <= heights[i])
            {
                monoStack.RemoveAt(monoStack.Count - 1);
            }

            monoStack.Add((heights[i], i));
        }

        return result;
    }

    private static int Search(int height, List<(int height, int index)> monoStack)
    {
        var left = 0;
        var right = monoStack.Count - 1;
        var ans = -1;
        while (left <= right)
        {
            var mid = (left + right) / 2;
            if (monoStack[mid].height > height)
            {
                ans = Math.Max(ans, mid);
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }
        return ans;
    }
}
```

Can anyone share a C# version that passes?!