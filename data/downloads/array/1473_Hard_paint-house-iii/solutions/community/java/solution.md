# Java | Heavily Commented | Simple solution

**Author:** khaufnak
**Votes:** 46
**Link:** [https://leetcode.com/problems/paint-house-iii/solutions/674305/](https://leetcode.com/problems/paint-house-iii/solutions/674305/)

---

Recursive Step 1(Paint job for house #1) : Choose a color(0, 1, 2.. n) -> start painting house #1. At the end of 1 recursion, we will have 1 neighborhood
Recursive Step 2 (Paint job for house #2): Choose a color(0, 1, 2.. n) -> If this color is same as the last color, we don't create a neighbourhood, otherwise we create one. At the end of 2nd recursion, we will  either have 1 neighborhood or 2 neighborhoods based on the color we chose.
.
.
.
Recursive Step #m (Paint job for house #m): If we painted all houses with requested # of neighbours, good. Otherwise return MAX.

```
class Solution {
    int MAX = 100000000;

    public int minCost(int[] houses, int[][] cost, int m, int n, int target) {
        int[][][] dp = new int[m][n][target + 1];
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j)
                Arrays.fill(dp[i][j], -1);
        }

        int ans = paintRecursively(houses, cost, m, n, target, 0, 0, -1, dp);
        if (ans == MAX) {
            return -1;
        }
        return ans;
    }

    //houseToBePainted = current house to be painted
    //currentTarget = number of neighborhoods painted till now
    //lastNbhColor = last neighbours color
    public int paintRecursively(int[] houses, int[][] cost, int m, int n, int target,
                                int houseToBePainted, // Dp state
                                int currentTarget, // Dp state
                                int lastNbhColor, // Dp state
                                int[][][] dp
    ) {
        if (houseToBePainted == m) {
            if (currentTarget == target) return 0;
            return MAX;
        }
        if (currentTarget == target + 1) return MAX;
        if (lastNbhColor != -1) {
            if (dp[houseToBePainted][lastNbhColor][currentTarget] != -1) {
                return dp[houseToBePainted][lastNbhColor][currentTarget];
            }
        }
        int minCost = MAX;
        //Step 1: Choose a paint color
        for (int currentColor = 0; currentColor < n; ++currentColor) {
            // Do we even need to paint? Or the house is already painted with color that we chose.
            boolean isFree = false;
            if (houses[houseToBePainted] != 0) {
                //Note: If house is already painted with a different color than the one which we are using, stop right away, since we cannot override a paint.
                if (houses[houseToBePainted] != currentColor + 1)
                    continue;
                else // No need to pay to paint this color, it's already painted!
                    isFree = true;
            }
            //Step 2: Are we using a new paint that was not same as the last one?
            //Step 2A: If yes, we will create a new neighborhood from here 
            if (currentColor != lastNbhColor) {
                minCost = Math.min(minCost, paintRecursively(houses, cost, m, n, target, houseToBePainted + 1, currentTarget + 1, currentColor, dp) + ((isFree) ? 0 : cost[houseToBePainted][currentColor]));

            } else { // Step2B: If no, we will continue with previous neighborhood 
                minCost = Math.min(minCost, paintRecursively(houses, cost, m, n, target, houseToBePainted + 1, currentTarget, currentColor, dp) + ((isFree) ? 0 : cost[houseToBePainted][currentColor]));
            }
        }
        if (lastNbhColor != -1) {
            dp[houseToBePainted][lastNbhColor][currentTarget] = minCost;
        }
        return minCost;
    }

}
```
Time Complexity: There are (m * n * target) states with n operation(choosing a color for house m) in each of them. Therefore time complexity is ```O ((m * n * target) * n)```