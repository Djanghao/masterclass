# Beats 100.00% of users with Swift in Runtime and Memory

**Author:** laurayang321
**Votes:** 0
**Link:** [https://leetcode.com/problems/knight-probability-in-chessboard/solutions/5190892/](https://leetcode.com/problems/knight-probability-in-chessboard/solutions/5190892/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    private let directions = [
        (2, 1), (2, -1), (-2, 1), (-2, -1),
        (1, 2), (1, -2), (-1, 2), (-1, -2)
    ]
    
    func knightProbability(_ n: Int, _ k: Int, _ row: Int, _ column: Int) -> Double {
        if k == 0 { return 1.0 }
        // Initialize a 3D DP array with 0.0
        var dp = Array(repeating: Array(repeating: Array(repeating: 0.0, count: n), count: n), count: k + 1)
        
        // Base case: At step 0, the knight is at (row, column)
        dp[0][row][column] = 1.0
        
        // DP transition
        for step in 1...k {
            for r in 0..<n {
                for c in 0..<n {
                    if dp[step - 1][r][c] > 0 {
                        for direction in directions {
                            let nr = r + direction.0
                            let nc = c + direction.1
                            if nr >= 0 && nr < n && nc >= 0 && nc < n {
                                dp[step][nr][nc] += dp[step - 1][r][c] / 8.0
                            }
                        }
                    }
                }
            }
        }
        
        // Sum up probabilities for all positions on the board after k moves
        var result = 0.0
        for r in 0..<n {
            for c in 0..<n {
                result += dp[k][r][c]
            }
        }
        
        return result
    }
}
```