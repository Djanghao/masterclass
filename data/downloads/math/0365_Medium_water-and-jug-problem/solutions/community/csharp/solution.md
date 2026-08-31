# c# : Easy Solution

**Author:** rahul89798
**Votes:** 0
**Link:** [https://leetcode.com/problems/water-and-jug-problem/solutions/5928864/](https://leetcode.com/problems/water-and-jug-problem/solutions/5928864/)

---

# Complexity
- Time complexity:
O(x*y)

- Space complexity:
O(n) -> Excluding recursion stack

# Code
```csharp []
public class Solution
{
    public bool CanMeasureWater(int x, int y, int target)
    {
        return CanMeasureWaterUntil(0, 0, x, y, target, []);
    }

    private bool CanMeasureWaterUntil(int x, int y, int xLimit, int yLimit, int target, List<string> visited)
    {
        if(x + y == target) 
            return true;

        var node = $"{x}_{y}";
        if(visited.Contains(node)) 
            return false;

        visited.Add(node);

        return CanMeasureWaterUntil(0, y, xLimit, yLimit, target, visited)
            || CanMeasureWaterUntil(x, 0, xLimit, yLimit, target, visited)
            || CanMeasureWaterUntil(xLimit, y, xLimit, yLimit, target, visited)
            || CanMeasureWaterUntil(x, yLimit, xLimit, yLimit, target, visited)
            || CanMeasureWaterUntil(x + Math.Min(xLimit - x, y), y - Math.Min(xLimit - x, y), xLimit, yLimit, target, visited)
            || CanMeasureWaterUntil(x - Math.Min(yLimit - y, x), y + Math.Min(yLimit - y, x), xLimit, yLimit, target, visited);
    }
}
```