# C# | Beats 100% | TC: O(N + M), SC: O(1) | Simple | Straight forward with detailed explanation

**Author:** vkonatha
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/6074801/](https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/solutions/6074801/)

---

# Intuition
Initially, I thought this was a complex problem. I started by attempting to solve it using DFS with DP and later tried using a priority queue, but I kept encountering time limit and memory limit issues. Eventually, I realized the problem wasn't as difficult as I initially believed. The key insight was that the column cost remains the same regardless of the row, and the row cost remains the same regardless of the column. With this understanding, I was able to implement the solution successfully and achieve a performance that outperformed 100% of other submissions.
# Approach
First, we need to determine the column direction of the home position. Based on this, we move toward the target column while adding the column cost to the total cost.

After reaching the correct column, we then identify the row direction\u2014whether it's upward or downward. Accordingly, we move closer to the home position, adding the row cost to the total cost along the way.

Once we arrive at the home location, the accumulated total cost represents the complete cost to reach the home, which we return as the result.

# Complexity
- Time complexity:$$O(N + M)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int MinCost(int[] startPos, int[] homePos, int[] rowCosts, int[] colCosts)
        { 
             int cost = 0;

            //if home col is in right 
            if (startPos[1] < homePos[1])
            {
                //then move right by doing +1 to current col and caluclate cost
                for (var i = startPos[1] + 1; i <= homePos[1]; i++)
                {
                    cost += colCosts[i];
                }
            }
            //if home col is in left 
            else if (startPos[1] > homePos[1])
            {
                //then move left by doing -1 to current col and caluclate cost
                for (var i = startPos[1] - 1; i >= homePos[1]; i--)
                {
                    cost += colCosts[i];
                }
            }

            //if home row is in bottom
            if (startPos[0] < homePos[0])
            {
                //then move towards bottom by doing +1 to current row and caluclate cost
                for (var i = startPos[0] + 1; i <= homePos[0]; i++)
                {
                    cost += rowCosts[i];
                }
            }
            //if home row is in top
            else if (startPos[0] > homePos[0])
            {
                //then move towards top by doing -1 to current row and caluclate cost
                for (var i = startPos[0] - 1; i >= homePos[0]; i--)
                {
                    cost += rowCosts[i];
                }
            }
            //finally return cost
            return cost;
        }
}
```