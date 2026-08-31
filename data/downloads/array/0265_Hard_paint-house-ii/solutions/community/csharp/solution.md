# Space-optimized C# solution - Beats 100%

**Author:** omk-man
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house-ii/solutions/3538304/](https://leetcode.com/problems/paint-house-ii/solutions/3538304/)

---

# Code
```
public class Solution {
    public int MinCostII(int[][] costs) {
        int n = costs.Length;
        int k = costs[0].Length;
        int prevMin = int.MaxValue;
        int prevMinIndex = -1;
        int prevSecondMin = int.MaxValue;
        for (int row = 0; row < n; row++) {
            int min = int.MaxValue;
            int minIndex = -1;
            int secondMin = int.MaxValue;
            for (int col = 0; col < k; col++) {
                int cost = costs[row][col];
                if (row > 0) {
                    cost = cost + (col == prevMinIndex ? prevSecondMin : prevMin);
                }
                if (cost < min) {
                    secondMin = min;
                    min = cost;
                    minIndex = col;
                } else if (cost < secondMin) {
                    secondMin = cost;
                }
            }
            prevMin = min;
            prevMinIndex = minIndex;
            prevSecondMin = secondMin;
        }
        return prevMin;
    }
}
```