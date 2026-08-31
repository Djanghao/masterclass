# 🚀 [VIDEO] 🔥 100% Winning Strategy with Dynamic Programming! | #Code 💻

**Author:** vanAmsen
**Votes:** 18
**Link:** [https://leetcode.com/problems/predict-the-winner/solutions/3826236/](https://leetcode.com/problems/predict-the-winner/solutions/3826236/)

---

# Intuition
When I first read the problem, I realized that it was a game theory problem with a twist of dynamic programming. The problem states that two players are playing a game where they can choose numbers from either ends of the array, and the player with the maximum total wins. The challenge is to determine if the first player can win or not, assuming both players are playing optimally.

https://youtu.be/s_B77SzZ7T4

# Approach
To solve this problem, I leveraged dynamic programming (DP). The primary logic revolves around setting up a 2D DP array, `dp[i][j]`, where each cell signifies the maximum possible score the first player can achieve over the second player. This score is derived from a subarray of the original array, starting from index `i` to `j`.

Here's the detailed breakdown of the approach:

1. **Initialization**: I initialized the DP array diagonally. This step was necessary because, when there is only one element left to pick (i.e., `i == j`), the player will take that number, and hence `dp[i][j] = nums[i]`.

2. **State Transition**: For every cell `dp[i][j]` in the DP array, the first player has two choices: either pick the `i`-th number or the `j`-th number. Each choice leads to a different state:

    - If the first player picks the `i`-th number, the remaining array becomes `nums[i+1 : j+1]`. Now it's the second player's turn. Given that the second player also plays optimally to maximize his net score, he will pick a number which leaves the first player with a minimum net score. This results in a state transition to `dp[i+1][j]`, causing the net score for the first player to be `nums[i] - dp[i+1][j]`.

    - Similarly, if the first player picks the `j`-th number, the remaining array becomes `nums[i : j]`. This results in a state transition to `dp[i][j-1]`, leading to a net score for the first player of `nums[j] - dp[i][j-1]`.

3. **Choice**: For each `dp[i][j]`, the first player will choose the maximum net score between the two possible state transitions. Hence, `dp[i][j] = max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1])`.

4. **Final Decision**: I examined `dp[0][n-1]` to determine the outcome of the game. If `dp[0][n-1]` is non-negative, it means the first player can win or tie the game, so I returned `True`. Otherwise, I returned `False`. This is because `dp[0][n-1]` represents the maximum net score the first player can get over the second player by considering the entire array. If this score is non-negative, the first player can secure a win or at least a tie.
# Complexity
- Time complexity: The time complexity of this solution is \\(O(n^2)\\), where \\(n\\) is the length of the input array. This is because we have to fill up the \\(n \	imes n\\) DP table.

- Space complexity: The space complexity is also \\(O(n^2)\\) for the DP table. 

This code follows the approach I mentioned above and solves the problem by building a dynamic programming table and then using that table to determine if the first player can win.

# Code
``` Python []
class Solution:
    def PredictTheWinner(self, nums: List[int]) -> bool:
        n = len(nums) 
        dp = [[0]*n for _ in range(n)] 
        for i in range(n-1, -1, -1): 
            for j in range(i, n): 
                if i == j: 
                    dp[i][j] = nums[i] 
                else: 
                    dp[i][j] = max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1])    
        return dp[0][n-1] >= 0 
```
``` C++ []
class Solution {
public:
    bool PredictTheWinner(vector<int>& nums) {
        int n = nums.size();
        vector<vector<int>> dp(n, vector<int>(n, 0));
        
        for (int i = n-1; i >= 0; --i) {
            for (int j = i; j < n; ++j) {
                if (i == j) {
                    dp[i][j] = nums[i];
                } else {
                    dp[i][j] = max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1]);
                }
            }
        }
        
        return dp[0][n-1] >= 0;
    }
};
```
``` Java []
class Solution {
    public boolean PredictTheWinner(int[] nums) {
        int n = nums.length;
        int[][] dp = new int[n][n];
        
        for (int i = n-1; i >= 0; --i) {
            for (int j = i; j < n; ++j) {
                if (i == j) {
                    dp[i][j] = nums[i];
                } else {
                    dp[i][j] = Math.max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1]);
                }
            }
        }
        
        return dp[0][n-1] >= 0;
    }
}
```
``` JavaScript []
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    const n = nums.length;
    const dp = Array.from(Array(n), () => Array(n).fill(0));
    
    for (let i = n-1; i >= 0; --i) {
        for (let j = i; j < n; ++j) {
            if (i == j) {
                dp[i][j] = nums[i];
            } else {
                dp[i][j] = Math.max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1]);
            }
        }
    }
    
    return dp[0][n-1] >= 0;
};
```
``` C# []
public class Solution {
    public bool PredictTheWinner(int[] nums) {
        int n = nums.Length;
        int[,] dp = new int[n, n];
        
        for (int i = n-1; i >= 0; --i) {
            for (int j = i; j < n; ++j) {
                if (i == j) {
                    dp[i, j] = nums[i];
                } else {
                    dp[i, j] = Math.Max(nums[i] - dp[i+1, j], nums[j] - dp[i, j-1]);
                }
            }
        }
        
        return dp[0, n-1] >= 0;
    }
}
```

# Video for  C++
https://www.youtube.com/watch?v=5EbtcjwE2qw