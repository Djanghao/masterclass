# SortedDictionary + hashset.Unionwith(for inner pointers)

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6140605/](https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/solutions/6140605/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    private bool NotContains(HashSet<int> innerP, int y1, int y2)
    {
        foreach (int y in innerP)
        {
            if (y >= y1 && y <= y2)
                return false;
        }

        return true;
    }

    public int MaxRectangleArea(int[][] points) {
        int len = points.Length, maxArea = -1;
        if(len < 4)
            return 0;

        var sortedArr = points.OrderBy(x=>x[0]).ThenBy(x=>x[1]).ToArray();
        SortedDictionary<int, List<int>> dict = new();

        foreach(int[] p in sortedArr)
        {
            int x = p[0], y = p[1];
            if(!dict.ContainsKey(x))
                dict.Add(x, new List<int>());

            dict[x].Add(y);
        }

        var keys = dict.Keys.ToArray();
        len = keys.Length;
        if(len < 2)
            return 0;

        for (int i = 0; i < len - 1; i++)
        {
            if (dict[keys[i]].Count < 2)
                continue;
            HashSet<int> innerP = new();
            for (int j = i + 1; j < len; j++)
            {
                if (j > i + 1)
                {
                    innerP.UnionWith(dict[keys[j-1]].ToHashSet());
                }

                if (dict[keys[j]].Count < 2)
                    continue;

                int x1 = keys[i], x2 = keys[j];
                int idx1 = 0, idx2 = 0, y1 = -1;
                List<int> y1s = dict[keys[i]].ToList();
                List<int> y2s = dict[keys[j]].ToList();
                while (idx1 < y1s.Count && idx2 < y2s.Count)
                {
                    if (y1s[idx1] == y2s[idx2])
                    {
                        if (y1 == -1)
                            y1 = y1s[idx1];
                        else
                        {
                            if(NotContains(innerP, y1, y1s[idx1]))
                                maxArea = Math.Max(maxArea, (x2 - x1) * (y1s[idx1] - y1));

                            y1 = y1s[idx1];
                        }

                        idx1++;
                        idx2++;
                    }
                    else
                    {
                        if (y1 != -1)
                            y1 = -1;

                        if (y1s[idx1] < y2s[idx2])
                            idx1++;
                        else
                            idx2++;
                    }
                }
            }
        }

        return maxArea;
    }
}
```