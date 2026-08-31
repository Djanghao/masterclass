# Track coordinate of each rectangle and total area

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/perfect-rectangle/solutions/5959401/](https://leetcode.com/problems/perfect-rectangle/solutions/5959401/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N*4)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N*4)
# Code
```csharp []
public class Solution {
    public bool IsRectangleCover(int[][] rectangles) {
			
        HashSet<string> points = new();
        int x0 = int.MaxValue, y0 = int.MaxValue, x1 = int.MinValue, y1 = int.MinValue;
        long area = 0;
        string[] pStr;
        foreach(int[] p in rectangles)
        {
            area += (p[2]-p[0])*(p[3]-p[1]);
            pStr = new string[]{  p[0]+"#"+p[1],p[2]+"#"+p[1],p[0]+"#"+p[3],p[2]+"#"+p[3]};
            x0 = Math.Min(x0, p[0]);
            y0 = Math.Min(y0, p[1]);
            x1 = Math.Max(x1, p[2]);
            y1 = Math.Max(y1, p[3]);

            foreach(string s in pStr)
            {
                if(!points.Add(s))
                    points.Remove(s);
            }
        }

        if(points.Count != 4 || area != (x1-x0)*(y1-y0))
            return false;

        pStr = new string[]{  x0+"#"+y0,x1+"#"+y0,x0+"#"+y1,x1+"#"+y1};
        foreach(string p in pStr)
        {
            if(!points.Contains(p))
                return false;
        }

        return true;
    }
}
```