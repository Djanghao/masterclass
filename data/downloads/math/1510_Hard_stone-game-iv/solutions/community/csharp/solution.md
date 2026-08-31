# 💥Runtime beats 92.86%, Memory beats 100.00% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-iv/solutions/5837522/](https://leetcode.com/problems/stone-game-iv/solutions/5837522/)

---

# Intuition
The intuition behind this problem is that each player can only remove a certain number of stones defined by perfect squares, and the goal is to determine if the first player (Alice) can always win if both play optimally.

# Approach
The approach involves using dynamic programming to build a solution where we create an array that tracks whether the current player can win with a given number of stones; we fill this array by checking all possible square removals to see if they leave the opponent in a losing position.

# Complexity
- Time complexity:
O(n\u221An) because we iterate through all stone counts up to n and for each, we check perfect squares up to \u221An.

- Space complexity:
O(n) due to the storage needed for the dynamic programming array.

# Code
```csharp []
public class Solution {
    public bool WinnerSquareGame(int n) {
        bool[] dp = new bool[n + 1];
        
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j * j <= i; j++) {
                if (!dp[i - j * j]) {
                    dp[i] = true;
                    break;
                }
            }
        }
        
        return dp[n];
    }
}

```