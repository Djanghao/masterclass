# C# Solution for Maximum Number of Points With Cost Problem

**Author:** Aman_Raj_Sinha
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5650784/](https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5650784/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves selecting cells from each row of a matrix to maximize the sum of the selected cells\u2019 values while accounting for penalties incurred when shifting columns between consecutive rows. The idea is to maximize the score in each row by considering both the value of the cell and the potential penalties from the previous row. The challenge is efficiently calculating the best score possible for each cell in the current row while considering the penalties from the previous row\u2019s choices.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Dynamic Programming with In-Place Updates:
	\u2022	Use a dynamic programming (DP) array to keep track of the maximum points achievable for each cell up to the current row.
	\u2022	Instead of creating separate auxiliary arrays for left and right transitions, compute the maximum values directly using two passes within the current row:
	    \u2022	Forward Pass: Calculate the best possible score for each cell by considering transitions from the left (i.e., from columns with smaller indices).
	    \u2022	Backward Pass: Calculate the best possible score for each cell by considering transitions from the right (i.e., from columns with larger indices).
	\u2022	Update the DP array in place after processing each row.
2.	Transition Logic:
	\u2022	Forward Pass: Accumulate the best possible scores for each cell from the left side, considering penalties.
	\u2022	Backward Pass: Similarly, accumulate the best possible scores for each cell from the right side.
	\u2022	The value in the DP array for each cell is updated by taking the maximum score achievable from either direction.
3.	Final Result:
	\u2022	After processing all rows, the maximum value in the DP array represents the maximum points that can be achieved.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(m * n): The solution iterates over each row and performs two linear passes (forward and backward) over the columns, leading to an overall time complexity of O(m * n). Here, m is the number of rows, and n is the number of columns in the matrix.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n): The solution uses a DP array of size n to store the maximum points for the current row. Since the updates are done in place and only the current and previous row\u2019s data are needed, the space complexity is O(n).

# Code
```
public class Solution {
    public long MaxPoints(int[][] points) {
        int m = points.Length;
        int n = points[0].Length;
        
        // DP array to store the max points up to the current row
        long[] dp = new long[n];
        
        // Initialize the dp array with the first row
        for (int c = 0; c < n; c++) {
            dp[c] = points[0][c];
        }
        
        // Iterate over each row starting from the second one
        for (int r = 1; r < m; r++) {
            long[] newDp = new long[n];
            
            // Forward pass to accumulate left maximums
            long leftMax = dp[0];
            for (int c = 0; c < n; c++) {
                leftMax = Math.Max(leftMax, dp[c] + c);
                newDp[c] = leftMax + points[r][c] - c;
            }
            
            // Backward pass to accumulate right maximums
            long rightMax = dp[n - 1] - (n - 1);
            for (int c = n - 1; c >= 0; c--) {
                rightMax = Math.Max(rightMax, dp[c] - c);
                newDp[c] = Math.Max(newDp[c], rightMax + points[r][c] + c);
            }
            
            // Update dp array with the newDp values for the current row
            dp = newDp;
        }
        
        // The result will be the maximum value in the last dp array
        long maxPoints = 0;
        for (int c = 0; c < n; c++) {
            maxPoints = Math.Max(maxPoints, dp[c]);
        }
        
        return maxPoints;
    }
}
```