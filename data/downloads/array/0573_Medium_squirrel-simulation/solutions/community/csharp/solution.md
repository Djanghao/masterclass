# C# - 7 lines

**Author:** BisocM
**Votes:** 0
**Link:** [https://leetcode.com/problems/squirrel-simulation/solutions/4993932/](https://leetcode.com/problems/squirrel-simulation/solutions/4993932/)

---

# Code
```
public class Solution {
public int MinDistance(int height, int width, int[] tree, int[] squirrel, int[][] nuts)
    {
        int totalDistToTree = nuts.Sum(nut => 2 * FindProximity(nut, tree));
        return nuts.Select(nut => totalDistToTree - FindProximity(nut, tree) + FindProximity(nut, squirrel))
                    .Min();
    }
    private int FindProximity(int[] p1, int[] p2) => Math.Abs(p1[0] - p2[0]) + Math.Abs(p1[1] - p2[1]);
}
```