# Solution with Dictionary

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-area-rectangle/solutions/5135365/](https://leetcode.com/problems/minimum-area-rectangle/solutions/5135365/)

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
```
public class Solution {
    public int MinAreaRect(int[][] points) {
        int n = points.Length;
        Dictionary<int, List<(int, int)>> xkey = new ();
        Dictionary<int, List<(int, int)>> ykey = new ();
        Dictionary<int, Dictionary<int, bool>> exists = new ();
        for(int i=0; i<n; i++)
        {
            int x = points[i][0];
            int y = points[i][1];

            if (!xkey.ContainsKey(x))
            {
                xkey[x] = new List<(int, int)>();
            }
            if (!ykey.ContainsKey(y))
            {
                ykey[y] = new List<(int, int)>();
            }
            if (!exists.ContainsKey(x))
            {
                exists[x] = new Dictionary<int,bool>();
            }
            var d1 = exists[x];
            d1[y] = true;
            xkey[x].Add((x,y));
            ykey[y].Add((x,y));
        }
        int minArea = Int32.MaxValue;
        for(int i=0; i<n; i++)
        {
            int x = points[i][0];
            int y = points[i][1];
            List<(int, int)> ylist = ykey[y];
            List<(int, int)> xlist = xkey[x];
            foreach((int, int) p in ylist)
            {
                if (p.Item1 > x)
                {
                    foreach((int, int) p2 in xlist)
                    {
                        if (p2.Item2 > y)
                        {
                            if (exists.ContainsKey(p.Item1))
                            {
                                var d1 = exists[p.Item1];
                                if (d1.ContainsKey(p2.Item2))
                                {
                                    int area = (p.Item1-x) * (p2.Item2 - y);
                                    minArea = Math.Min(area, minArea);
                                }
                            }
                        }
                    }
                }
            }
        }
        return minArea == Int32.MaxValue ? 0 : minArea;
    }
}
```