# C# easy solution

**Author:** draithh
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/5528717/](https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/5528717/)

---

>

# Code
```
public class Solution {
    public int CountGoodRectangles(int[][] rectangles) {
        int max = 0;
        int c = 0;
        foreach(int[] rec in rectangles)
        {
            int min = Math.Min(rec[0],rec[1]);
            if (min>max)
            {
                max = Math.Max(min, max);
                c = 1;
            }
            else if (min == max)
            {
                c++;
            }
        }
        return c; 
    }
}
```