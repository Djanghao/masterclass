# 🔥 [VIDEO] Conquer The Chess Knight Challenge with Python and Dynamic Programming!

**Author:** vanAmsen
**Votes:** 2
**Link:** [https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3798746/](https://leetcode.com/problems/knight-probability-in-chessboard/solutions/3798746/)

---

# Intuition
When first approaching this problem, I thought of the knight's eight possible moves on a chessboard and how some of these moves can cause it to fall off the board. I recognized the probability aspect of the problem and the fact that each move the knight makes is independent of the others. This made me think about using dynamic programming to solve this problem as it involves computing the probabilities of independent events and has overlapping sub-problems, which are characteristics that dynamic programming excels at.

https://youtu.be/tp5UqIarBGQ

# Approach
I used a dynamic programming approach to solve this problem. The idea is to use a 3D array to keep track of the probability of the knight being on each cell after a certain number of moves. The dp[i][j][k] cell in this array represents the probability of the knight being in cell (j, k) after i moves. For each cell, I calculate its probability by averaging the probabilities of the knight reaching that cell from each of its possible previous positions. The base case is that the knight is on the board (with a probability of 1) if it starts on the board. Finally, I sum up the probabilities in all cells after k moves to get the total probability of the knight remaining on the board.

# Complexity
- Time complexity: The time complexity of this solution is $$O(n^2 * k)$$ where n is the size of the board and k is the number of moves. This is because for each move, I iterate over all cells in the n by n board, and for each cell, I calculate its probability based on the probabilities of its previous positions.
  
- Space complexity: The space complexity of this solution is $$O(n^2 * k)$$ due to the 3D dp array used to store the probabilities of the knight being on each cell after a certain number of moves.

# Code
``` Python []
class Solution:
    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:
        moves = [(1, 2), (2, 1), (-1, 2), (2, -1), (-1, -2), (-2, -1), (1, -2), (-2, 1)] 
        dp = [[0 for _ in range(n)] for _ in range(n)]
        dp_prev = [[0 for _ in range(n)] for _ in range(n)]
        dp_prev[row][column] = 1

        for step in range(k):
            for r in range(n):
                for c in range(n):
                    dp[r][c] = 0
                    for dr, dc in moves:
                        prev_r, prev_c = r - dr, c - dc
                        if 0 <= prev_r < n and 0 <= prev_c < n:
                            dp[r][c] += dp_prev[prev_r][prev_c] / 8.0
            dp, dp_prev = dp_prev, dp 

        total_probability = sum(sum(dp_prev[r][c] for c in range(n)) for r in range(n))
        return total_probability
```
``` JavaScript []
var knightProbability = function(n, k, r, c) {
    const moves = [[1,2], [2,1], [-1,2], [2,-1], [-1,-2], [-2,-1], [1,-2], [-2,1]];
    let dp = Array.from({length: n}, () => new Array(n).fill(0));
    let dpPrev = Array.from({length: n}, () => new Array(n).fill(0));
    dpPrev[r][c] = 1;

    for(let step = 0; step < k; step++) {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                dp[i][j] = 0;
                for(let [dr, dc] of moves) {
                    let prevR = i - dr;
                    let prevC = j - dc;
                    if(prevR >= 0 && prevR < n && prevC >= 0 && prevC < n) {
                        dp[i][j] += dpPrev[prevR][prevC] / 8.0;
                    }
                }
            }
        }
        [dp, dpPrev] = [dpPrev, dp];
    }

    let totalProbability = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            totalProbability += dpPrev[i][j];
        }
    }

    return totalProbability;
};
```
``` C++ []
class Solution {
public:
    double knightProbability(int n, int k, int row, int column) {
        vector<vector<int>> moves = {{1, 2}, {2, 1}, {-1, 2}, {2, -1}, {-1, -2}, {-2, -1}, {1, -2}, {-2, 1}};
        vector<vector<double>> dp(n, vector<double>(n, 0));
        vector<vector<double>> dpPrev(n, vector<double>(n, 0));
        dpPrev[row][column] = 1;
        
        for (int step = 0; step < k; step++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    dp[i][j] = 0;
                    for (auto& move : moves) {
                        int prevR = i - move[0];
                        int prevC = j - move[1];
                        if (prevR >= 0 && prevR < n && prevC >= 0 && prevC < n) {
                            dp[i][j] += dpPrev[prevR][prevC] / 8.0;
                        }
                    }
                }
            }
            swap(dp, dpPrev);
        }
        
        double totalProbability = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                totalProbability += dpPrev[i][j];
            }
        }
        
        return totalProbability;
    }
};
```
``` Java []
class Solution {
    public double knightProbability(int n, int k, int r, int c) {
        int[][] moves = {{1, 2}, {2, 1}, {-1, 2}, {2, -1}, {-1, -2}, {-2, -1}, {1, -2}, {-2, 1}};
        double[][] dp = new double[n][n];
        double[][] dpPrev = new double[n][n];
        dpPrev[r][c] = 1;
        
        for (int step = 0; step < k; step++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    dp[i][j] = 0;
                    for (int[] move : moves) {
                        int prevR = i - move[0];
                        int prevC = j - move[1];
                        if (prevR >= 0 && prevR < n && prevC >= 0 && prevC < n) {
                            dp[i][j] += dpPrev[prevR][prevC] / 8.0;
                        }
                    }
                }
            }
            double[][] temp = dp;
            dp = dpPrev;
            dpPrev = temp;
        }
        
        double totalProbability = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                totalProbability += dpPrev[i][j];
            }
        }
        
        return totalProbability;
    }
}
```
``` Rust []
impl Solution {
    pub fn knight_probability(n: i32, k: i32, r: i32, c: i32) -> f64 {
        let moves = [(1, 2), (2, 1), (-1, 2), (2, -1), (-1, -2), (-2, -1), (1, -2), (-2, 1)];
        let mut dp = vec![vec![0.0; n as usize]; n as usize];
        let mut dp_prev = vec![vec![0.0; n as usize]; n as usize];
        dp_prev[r as usize][c as usize] = 1.0;

        for _step in 0..k {
            for i in 0..n {
                for j in 0..n {
                    dp[i as usize][j as usize] = 0.0;
                    for &(dr, dc) in &moves {
                        let prev_r = i - dr;
                        let prev_c = j - dc;
                        if prev_r >= 0 && prev_r < n && prev_c >= 0 && prev_c < n {
                            dp[i as usize][j as usize] += dp_prev[prev_r as usize][prev_c as usize] / 8.0;
                        }
                    }
                }
            }
            std::mem::swap(&mut dp, &mut dp_prev);
        }

        let mut total_probability = 0.0;
        for i in 0..n {
            for j in 0..n {
                total_probability += dp_prev[i as usize][j as usize];
            }
        }
        total_probability
    }
}
```