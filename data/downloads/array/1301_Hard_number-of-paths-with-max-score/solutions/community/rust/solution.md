# Rust --- 100% runtime and Memory Beats

**Author:** hassam_472
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-paths-with-max-score/solutions/5953976/](https://leetcode.com/problems/number-of-paths-with-max-score/solutions/5953976/)

---


# Code
```rust []
impl Solution {
    pub fn paths_with_max_score(board: Vec<String>) -> Vec<i32> {
        let n = board.len();
        let board: Vec<Vec<char>> = board.iter()
            .map(|s| s.chars().collect())
            .collect();
        
        const MOD: i32 = 1_000_000_007;
        // dp[i][j] = (max_score, count_of_paths)
        let mut dp = vec![vec![(0, 0); n]; n];
        
        // Initialize starting point
        dp[n-1][n-1] = (0, 1);  // Score is 0, and there's 1 path
        
        // Process from bottom-right to top-left
        for i in (0..n).rev() {
            for j in (0..n).rev() {
                if (i == n-1 && j == n-1) || board[i][j] == 'X' {
                    continue;
                }
                
                let mut max_score = -1;
                let mut count = 0;
                
                // Check all three possible moves: diagonal, down, right
                for &(ni, nj) in &[(i+1, j+1), (i+1, j), (i, j+1)] {
                    if ni < n && nj < n && board[ni][nj] != 'X' {
                        let (next_score, next_count) = dp[ni][nj];
                        if next_count > 0 {  // If there's a valid path
                            if next_score > max_score {
                                max_score = next_score;
                                count = next_count;
                            } else if next_score == max_score {
                                count = (count + next_count) % MOD;
                            }
                        }
                    }
                }
                
                if max_score >= 0 {  // If we found at least one valid path
                    let current_value = if board[i][j].is_digit(10) {
                        board[i][j].to_digit(10).unwrap() as i32
                    } else if board[i][j] == 'E' {
                        0
                    } else {
                        0
                    };
                    dp[i][j] = ((max_score + current_value) % MOD, count);
                }
            }
        }
        
        let (score, paths) = dp[0][0];
        if paths == 0 {
            vec![0, 0]
        } else {
            vec![score, paths]
        }
    }
}
```