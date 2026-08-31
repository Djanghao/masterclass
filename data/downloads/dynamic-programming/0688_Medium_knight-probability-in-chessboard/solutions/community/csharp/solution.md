# C# Solution for Knight Probability in Chess Board Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3799491/](https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3799491/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem can be solved using dynamic programming. We need to find the probability that the knight remains on the board after exactly k moves starting from the given position. To do this, we can calculate the probabilities for all possible cells on the board after each move and keep updating the probabilities based on the previous positions.

# Approach
<!-- Describe your approach to solving the problem. -->
- Create a 3D array dp[n][n][k+1] to store the probabilities. dp[i][j][s] represents the probability of the knight being on cell (i,j) after s moves.
- Initialize the base case: dp[row][column][0] = 1, since the knight hasn't moved yet.
- Use a directions array to store all possible knight moves (8 in total).
- For each s from 1 to k, and each cell (i,j) on the board:
1. Calculate the probability of reaching cell (i,j) after s moves by summing up the probabilities from all possible previous positions in the last move.
1. Update dp[i][j][s] by dividing the sum by 8 (since there are 8 possible moves for the knight).
- Finally, sum up the probabilities for all cells on the board after k moves to get the total probability that the knight remains on the board.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this solution is O(n^2 * k), where n is the size of the chessboard and k is the number of moves. The nested loops iterate over all cells on the board and for each cell, the algorithm performs a constant number of operations.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n^2 * k) as well, due to the 3D dp array used to store the probabilities for each cell and each move.

# Code
```
public class Solution {
    public double KnightProbability(int n, int k, int row, int column) {
        int[][] directions = new int[][] {
        new int[] { 2, 1 },
        new int[] { 1, 2 },
        new int[] { -1, 2 },
        new int[] { -2, 1 },
        new int[] { -2, -1 },
        new int[] { -1, -2 },
        new int[] { 1, -2 },
        new int[] { 2, -1 }
    };
    
    double[,,] dp = new double[n, n, k + 1];
    dp[row, column, 0] = 1;
    
    for (int s = 1; s <= k; s++) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                foreach (var dir in directions) {
                    int prevRow = i + dir[0];
                    int prevCol = j + dir[1];
                    
                    if (prevRow >= 0 && prevRow < n && prevCol >= 0 && prevCol < n) {
                        dp[i, j, s] += dp[prevRow, prevCol, s - 1] / 8;
                    }
                }
            }
        }
    }
    
    double totalProbability = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            totalProbability += dp[i, j, k];
        }
    }
    
    return totalProbability;
    }
}
```