# C# Dynamic programming solution.

**Author:** salaschen
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-stone-weight-ii/solutions/5070117/](https://leetcode.com/problems/last-stone-weight-ii/solutions/5070117/)

---

# Intuition
1.  We can transform the problem into another problem: 
Find a way to divide the stones into two groups g1 and g2, where Abs(sum(g1)-sum(g2)) is minimized.
2.  Imagine we have a bag of capacity c. Assuming stone[i]'s weight is stone[i] as well. We want to find out the largest value we can fit into this bag. So the bag can be one group, and the rest can be another group. We can use dp to find this out.

# Approach
Use a two dimentional dynamic programming dp[i][j]. 
i  = 0 to stones.length-1, it means we are including all the stones[0..i]. 
j = 0 to largest possible capacity, which is 30 * 100. 
dp[i][j] = j < stones[i]? dp[i-1][j] : Max(dp[i-1][j], dp[i-1][j-stones[i]+stones[i]);

# Complexity
- Time complexity:
O(30*100)

# Code
```
public class Solution {
    // use dp
    public int LastStoneWeightII(int[] stones) {
        Array.Sort(stones);
        int rowSize = stones.Length; 
        int colSize = rowSize * 100+10;
        int[,] dp = new int[rowSize, colSize];
        for (int i = 0; i < stones.Length; i++) {
            dp[i, 0] = 0;
        }

        // initialize the first row
        for (int j = 0; j < colSize; j++) {
            if (j < stones[0]) {
                dp[0, j] = 0;
            } else {
                dp[0, j] = stones[0];
            }
        }

        // calculate dp
        for (int i = 1; i < stones.Length; i++) {
            for (int j = 1; j < colSize; j++) {
                if (j < stones[i]) {
                    dp[i, j] = dp[i - 1, j];
                } else {
                    dp[i, j] = Math.Max(dp[i - 1, j], dp[i - 1, j - stones[i]]+stones[i]);
                }
            }
        }

        int total = stones.Sum();
        int result = int.MaxValue;

        // now try to find the closes
        for (int j = 1; j < colSize; j++) {
            int w1 = dp[stones.Length - 1, j];
            int w2 = total - w1;
            result = Math.Min(result, Math.Abs(w1 - w2));
            if (result == 0) { break; }
        }

        return result;
    }
}
```