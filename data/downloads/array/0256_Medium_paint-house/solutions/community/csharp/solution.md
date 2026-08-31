# C# Dynamic programming solution

**Author:** nrk1980
**Votes:** 1
**Link:** [https://leetcode.com/problems/paint-house/solutions/68254/](https://leetcode.com/problems/paint-house/solutions/68254/)

---

public class Solution {
    public int MinCost(int[,] costs) {
        
        int[,] runningCosts = new int[2,3];
        
        int numRows = costs.GetLength(0);
        int i = 0;
        for ( ; i < numRows; i++)
        {
            runningCosts[i%2, 0] = costs[i,0] + Math.Min(runningCosts[(i+1)%2,1], runningCosts[(i+1)%2,2] );
            runningCosts[i%2, 1] = costs[i,1] + Math.Min(runningCosts[(i+1)%2,0], runningCosts[(i+1)%2,2] );
            runningCosts[i%2, 2] = costs[i,2] + Math.Min(runningCosts[(i+1)%2,0], runningCosts[(i+1)%2,1] );
        }
        
        return Math.Min(runningCosts[(i+1)%2,0], Math.Min(runningCosts[(i+1)%2,1],runningCosts[(i+1)%2,2]));
    }
}