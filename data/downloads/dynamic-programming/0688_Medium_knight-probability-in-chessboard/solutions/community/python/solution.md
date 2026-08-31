# Very Easy to understand +Video || C++ || Java || Python

**Author:** shivam-727
**Votes:** 33
**Link:** [https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3798820/](https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3798820/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
just do dfs and after dfs count all the cells that are visited after k move then 
just calculate by formula p=favorableoutcome/totaloutcome.Dfs and memoize also so that we are not solving problems that are already solved.this will reduce time complexity.

For detailed explanation you can refer to my youtube channel (hindi Language)
https://youtu.be/abaZ13EXgxQ
 or link in my profile.Here,you can find any solution in playlists monthwise from june 2023 with detailed explanation.i upload daily leetcode solution video with short and precise explanation (5-10) minutes.


# Approach
<!-- Describe your approach to solving the problem. -->

1. The solution defines a class named "Solution" with a public function "knightProbability" that takes four parameters: n (size of the chessboard), k (number of moves), row (starting row index), and col (starting column index).

2. The class contains a 3D array "dp" to store the results of subproblems. dp[i][j][k] will store the probability of the knight remaining on the board after making k moves starting from position (i, j).

3. Two integer arrays, "xmove" and "ymove," are used to represent all possible moves a knight can make on the chessboard.

4. The "solve" function is a recursive function that calculates the probability of the knight remaining on the board after k moves starting from position (row, col).

5. The base cases for the recursive function are:
   - If the knight moves outside the board (row < 0, col < 0, row >= n, col >= n), the probability is 0.
   - If the number of moves (k) becomes 0, the probability is 1 (since the knight remains on the board after 0 moves).

6. The function first checks if the result for the current state (row, col, k) is already calculated and stored in the "dp" array. If so, it returns the precalculated value to avoid redundant calculations.

7. If the result for the current state is not available, the function computes it using a loop that iterates over all possible knight moves. For each move, it recursively calls the "solve" function to get the probability of the knight remaining on the board after making k-1 moves from the new position (row+xmove[i], col+ymove[i]). The result is then accumulated in the "ans" variable.

8. The probability for the current state (row, col, k) is stored in the "dp" array to avoid recomputation in future calls with the same parameters.

9. In the "knightProbability" function, the "dp" array is initialized with -1.0 for all positions and moves using a nested loop.

10. The function then calls the "solve" function to calculate the probability of the knight remaining on the board after k moves starting from the given position (row, col).

11. The final result is the favorable outcome (the probability of the knight remaining on the board) divided by the total number of possible outcomes (8^k), which is the total number of valid knight moves in k steps.

12. The function returns the computed probability.



# Complexity
- Time complexity:$$O(n*n*k)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n*n*k)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```C++ []
class Solution {
public:
double dp[26][26][102];
    int xmove[8] = {-2,-2,-1,-1,1,1,2,2};
    int ymove[8] = {-1,1,-2,2,-2,2,-1,1};
  double solve(int row,int col,int n,int k){
        if(row < 0 || col < 0 || row >= n || col >= n) return 0;
        if(k == 0) return 1;
        if(dp[row][col][k] != -1.0) return dp[row][col][k];
        
       double ans = 0;
        
        for(int i=0;i<8;i++){
            ans += solve(row+xmove[i], col+ymove[i], n, k-1);
        }
        
        return dp[row][col][k] = ans;
    }
    double knightProbability(int n, int k, int row, int col) {
        for(int i=0;i<26;i++){
            for(int j=0;j<26;j++){
                for(int k=0;k<102;k++){
                    dp[i][j][k]=-1;
                }
            }
        }
        double favourableoutcome = solve(row,col,n,k);
        double totaloutcome = pow(8,k);
        return favourableoutcome/totaloutcome;
    }
};
```
```Java []
public class Solution {
    double[][][] dp;
    int[] xmove = {-2, -2, -1, -1, 1, 1, 2, 2};
    int[] ymove = {-1, 1, -2, 2, -2, 2, -1, 1};

    public double knightProbability(int n, int k, int row, int col) {
        dp = new double[n][n][k + 1];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                Arrays.fill(dp[i][j], -1.0);
            }
        }
        double favourableOutcome = solve(row, col, n, k);
        double totalOutcome = Math.pow(8, k);
        return favourableOutcome / totalOutcome;
    }

    private double solve(int row, int col, int n, int k) {
        if (row < 0 || col < 0 || row >= n || col >= n) return 0;
        if (k == 0) return 1;
        if (dp[row][col][k] != -1.0) return dp[row][col][k];

        double ans = 0;

        for (int i = 0; i < 8; i++) {
            ans += solve(row + xmove[i], col + ymove[i], n, k - 1);
        }

        return dp[row][col][k] = ans;
    }
}

```
```Python []
class Solution:
    def __init__(self):
        self.dp = None
        self.xmove = [-2, -2, -1, -1, 1, 1, 2, 2]
        self.ymove = [-1, 1, -2, 2, -2, 2, -1, 1]

    def knightProbability(self, n: int, k: int, row: int, col: int) -> float:
        self.dp = [[[-1.0 for _ in range(k + 1)] for _ in range(n)] for _ in range(n)]
        favourableOutcome = self.solve(row, col, n, k)
        totalOutcome = 8 ** k
        return favourableOutcome / totalOutcome

    def solve(self, row: int, col: int, n: int, k: int) -> float:
        if row < 0 or col < 0 or row >= n or col >= n:
            return 0
        if k == 0:
            return 1
        if self.dp[row][col][k] != -1.0:
            return self.dp[row][col][k]

        ans = 0
        for i in range(8):
            ans += self.solve(row + self.xmove[i], col + self.ymove[i], n, k - 1)

        self.dp[row][col][k] = ans
        return ans

```
