# ✅Easy and Clean Code (C++ / Java)✅

**Author:** sourav_n06
**Votes:** 66
**Link:** [https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5648098/](https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5648098/)

---

### Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
My initial thought is that this problem can be approached using dynamic programming. The challenge is to maximize the points collected while moving through a matrix, where the penalty is incurred based on the column difference between consecutive rows. A recursive approach with memoization seems intuitive, but further optimization is possible by leveraging dynamic programming.

### Approach
<!-- Describe your approach to solving the problem. -->
1. **Dynamic Programming Setup**: 
   - Create a DP array to store the maximum points that can be collected up to each column for the current row.
   - Initialize this array with the values from the first row.

2. **Two-Pass Strategy**:
   - For each subsequent row, calculate the maximum points that can be collected by traversing the columns from left to right (`leftMax`) and right to left (`rightMax`).
   - `leftMax[i]` keeps track of the maximum points achievable from the left up to column `i` considering the movement penalty.
   - `rightMax[i]` does the same but from the right.

3. **Update DP Array**:
   - For each column in the current row, calculate the possible maximum points using the `leftMax` and `rightMax` arrays.
   - Update the DP array for the current row.

4. **Final Result**:
   - After processing all rows, the maximum value in the DP array will give the maximum points that can be collected.

### Complexity
- **Time complexity**: 
  - The time complexity is \\(O(n \	imes m)\\), where \\(n\\) is the number of rows and \\(m\\) is the number of columns. This is because we iterate over all elements in the matrix and use the two-pass strategy to calculate the maximum points for each row.

- **Space complexity**:
  - The space complexity is \\(O(m)\\), as we use additional arrays (`leftMax`, `rightMax`, and `newDp`) of size `m` to store intermediate results for each row.
   

# Code
```Cpp []
class Solution {
public:
    long long maxPoints(vector<vector<int>>& points) {
        int row = points.size();
        int col = points[0].size();
        vector<long long> dp(col, 0);
        
        for(int i = 0; i < col; i++) {
            dp[i] = points[0][i];
        }
        
        for(int r = 1; r < row; r++) {
            vector<long long> leftMax(col, 0), rightMax(col, 0);
            vector<long long> newDp(col, 0);
            
            leftMax[0] = dp[0];
            for(int i = 1; i < col; i++) {
                leftMax[i] = max(leftMax[i-1], dp[i] + i);
            }
            
            rightMax[col-1] = dp[col-1] - (col-1);
            for(int i = col-2; i >= 0; i--) {
                rightMax[i] = max(rightMax[i+1], dp[i] - i);
            }
            
            for(int i = 0; i < col; i++) {
                newDp[i] = max(leftMax[i] - i, rightMax[i] + i) + points[r][i];
            }
            
            dp = newDp;
        }
        
        return *max_element(dp.begin(), dp.end());
    }
};
```
```Java []
class Solution {
    public long maxPoints(int[][] points) {
        int row = points.length;
        int col = points[0].length;
        long[] dp = new long[col];
        
        for (int i = 0; i < col; i++) {
            dp[i] = points[0][i];
        }
        
        for (int r = 1; r < row; r++) {
            long[] leftMax = new long[col];
            long[] rightMax = new long[col];
            long[] newDp = new long[col];
            
            leftMax[0] = dp[0];
            for (int i = 1; i < col; i++) {
                leftMax[i] = Math.max(leftMax[i-1], dp[i] + i);
            }
            
            rightMax[col-1] = dp[col-1] - (col-1);
            for (int i = col-2; i >= 0; i--) {
                rightMax[i] = Math.max(rightMax[i+1], dp[i] - i);
            }
            
            for (int i = 0; i < col; i++) {
                newDp[i] = Math.max(leftMax[i] - i, rightMax[i] + i) + points[r][i];
            }
            
            dp = newDp;
        }
        
        long result = Long.MIN_VALUE;
        for (long value : dp) {
            result = Math.max(result, value);
        }
        
        return result;
    }
}

```
![upvote.jpeg](./images/0.jpeg)
