# 💥C# | Memory beats 100.00%, Runtime beats 95.24% [ EXPLAINED]

**Author:** r9n
**Votes:** 11
**Link:** [https://leetcode.com/problems/race-car/solutions/5751966/](https://leetcode.com/problems/race-car/solutions/5751966/)

---

# Intuition
Overshooting: For any target, calculate how far you can get by repeatedly accelerating. This helps identify if you can reach or overshoot the target.

Reversing Smartly: If you overshoot, reverse and try to come back efficiently. Alternatively, stop just before the target, reverse, and accelerate again.

Memoization: Store the result for each target in the dp[] array to avoid recalculating solutions for subproblems, drastically reducing the computational complexity.

# Approach
The approach uses Breadth-First Search (BFS) to explore the states (position, speed) and find the shortest sequence of commands to reach the target.

# Complexity
- Time complexity:
 The BFS explores each state at most once, leading to a time complexity of approximately O(targetlog(target)) due to limiting the search space to positions within 2 * target.

- Space complexity:
 The space complexity is O(targetlog(target)) as well, driven by the size of the queue and the visited set.

# Code
```csharp []
public class Solution {
    public int Racecar(int target) {
        int[] dp = new int[target + 1];
        return Dp(target, dp);
    }

    private int Dp(int target, int[] dp) {
        if (dp[target] > 0) return dp[target];
        int n = (int)Math.Log2(target) + 1; // Calculate the number of steps to overshoot or reach target
        if (1 << n == target + 1) {
            dp[target] = n; // Exact match with full acceleration
        } else {
            // Case 1: Go beyond the target and reverse
            dp[target] = n + 1 + Dp((1 << n) - 1 - target, dp); // Overshoot target and reverse
            
            // Case 2: Stop before the target, reverse and accelerate again
            for (int m = 0; m < n - 1; ++m) {
                dp[target] = Math.Min(dp[target], n + m + 1 + Dp(target - (1 << (n - 1)) + (1 << m), dp));
            }
        }
        return dp[target];
    }
}

```