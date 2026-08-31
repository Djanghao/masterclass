# 🙌 Easy to Understand | DP | With Explanation 📖

**Author:** akshycodes
**Votes:** 42
**Link:** [https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3800461/](https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3800461/)

---

# Intuition

- The code uses dynamic programming to solve the knight probability problem. The probability array is initialized to all zeros, and then the probability of the knight being on the board after each move is calculated. The base case is that the knight is already on the board, so the probability is 1. The recursive step is to iterate over all possible moves and update the probability of the knight being on the board after each move. The final probability is the probability that the knight is on the board after k moves.

# Approach
<!-- Describe your approach to solving the problem. -->
- The code below uses the DP approach. This approach is more efficient than recursion because it stores the probabilities for moves that have already been made. 
a step-by-step approach for the optimized code to find the probability that the knight remains on the board after making exactly k moves:

1. Initialize a 2D dp array of size n x n to store the probabilities of the knight being on the board from a specific cell.
2. Set the initial probability of the starting cell (row, column) to 1.0, as the knight starts from this cell.
3. For each move from 1 to k, do the following:
a. Create a new 2D newDp array to store the updated probabilities after one move.
b. Iterate through each cell (r, c) in the original dp array:
    - For each possible move of the knight, calculate the new position (nr, nc) after the move.
    - If the new position (nr, nc) is within the bounds of the n x n chessboard, update the probability in newDp[r][c] by adding the probability from the original dp[nr][nc] / 8.0. This is because the knight moves uniformly at random, so each move has a probability of 1/8 to be chosen.
    - Set dp to newDp to keep the updated probabilities for the next iteration.
4. After completing all k moves, calculate the total probability of the knight remaining on the board by summing up all the probabilities from the final dp array.
5. Return the total probability as the result.

- The isValid helper function is used to check whether a move is valid, i.e., whether the new position (r, c) after the move is within the bounds of the n x n chessboard. This function returns true if the move is valid, and false otherwise.

# Complexity
- Time complexity: O(n^2 * k). 
This is because the outer loop iterates over all possible values of k, and the inner loop iterates over all possible rows and columns.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    private final int[][] moves = {{-2, -1}, {-2, 1}, {-1, -2}, {-1, 2}, {1, -2}, {1, 2}, {2, -1}, {2, 1}};

    public double knightProbability(int n, int k, int row, int column) {
        double[][] dp = new double[n][n];
        dp[row][column] = 1.0;

        for(int move = 1; move<=k; move++) {
            double[][] ndp = new double[n][n];
            for(int r = 0; r<n; r++) {
                for(int c = 0; c<n; c++) {
                    for(int[] m: moves) {
                        int nr = r+m[0];
                        int nc = c+m[1];
                        if (isValid(nr, nc, n)) ndp[r][c] += dp[nr][nc]/8.0;
                    }
                }
            }
            dp = ndp;
        }

        double prob = 0.0;
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                prob += dp[r][c];
            }
        }

        return prob;
    }

    private boolean isValid(int r, int c, int n) {
        return r >= 0 && r < n && c >= 0 && c < n;
    }
}

```
```C++ []
class Solution {
public:
    double knightProbability(int n, int k, int row, int column) {
        vector<vector<double>> dp(n, vector<double>(n, 0));
        dp[row][column] = 1;

        vector<vector<int>> moves = {{-2, -1}, {-2, 1}, {-1, -2}, {-1, 2}, {1, -2}, {1, 2}, {2, -1}, {2, 1}};

        for (int move = 1; move <= k; move++) {
            vector<vector<double>> newDp(n, vector<double>(n, 0));
            for (int r = 0; r < n; r++) {
                for (int c = 0; c < n; c++) {
                    for (const auto& m : moves) {
                        int newR = r + m[0];
                        int newC = c + m[1];
                        if (isValid(newR, newC, n)) {
                            newDp[r][c] += dp[newR][newC] / 8.0;
                        }
                    }
                }
            }
            dp = newDp;
        }

        double probability = 0;
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                probability += dp[r][c];
            }
        }

        return probability;
    }

    bool isValid(int r, int c, int n) {
        return r >= 0 && r < n && c >= 0 && c < n;
    }
};
```
```Python3 []
class Solution:
    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:
        dp = [[0] * n for _ in range(n)]
        dp[row][column] = 1

        moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]

        for move in range(1, k + 1):
            new_dp = [[0] * n for _ in range(n)]
            for r in range(n):
                for c in range(n):
                    for m in moves:
                        new_r = r + m[0]
                        new_c = c + m[1]
                        if 0 <= new_r < n and 0 <= new_c < n:
                            new_dp[r][c] += dp[new_r][new_c] / 8.0
            dp = new_dp

        probability = 0.0
        for r in range(n):
            for c in range(n):
                probability += dp[r][c]

        return probability
```
```C []
double knightProbability(int n, int k, int row, int column) {
    double dp[n][n];
    memset(dp, 0, sizeof(dp));
    dp[row][column] = 1;

    int moves[8][2] = {{-2, -1}, {-2, 1}, {-1, -2}, {-1, 2}, {1, -2}, {1, 2}, {2, -1}, {2, 1}};

    for (int move = 1; move <= k; move++) {
        double newDp[n][n];
        memset(newDp, 0, sizeof(newDp));
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                for (int i = 0; i < 8; i++) {
                    int newR = r + moves[i][0];
                    int newC = c + moves[i][1];
                    if (newR >= 0 && newR < n && newC >= 0 && newC < n) {
                        newDp[r][c] += dp[newR][newC] / 8.0;
                    }
                }
            }
        }
        memcpy(dp, newDp, sizeof(dp));
    }

    double probability = 0;
    for (int r = 0; r < n; r++) {
        for (int c = 0; c < n; c++) {
            probability += dp[r][c];
        }
    }

    return probability;
}
```

> If you find my solution helpful, I would greatly appreciate your one upvote.