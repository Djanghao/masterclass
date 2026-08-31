# C# | 1 Line LINQ Solution

**Author:** neerex
**Votes:** 6
**Link:** [https://leetcode.com/problems/height-checker/solutions/3392207/](https://leetcode.com/problems/height-checker/solutions/3392207/)

---

# Code
```
public class Solution 
{
    public int HeightChecker(int[] heights) 
    {
        return heights.OrderBy(x => x)
            .Select((s, i) => heights[i] == s ? 0 : 1)
            .Sum();
    }
}
```