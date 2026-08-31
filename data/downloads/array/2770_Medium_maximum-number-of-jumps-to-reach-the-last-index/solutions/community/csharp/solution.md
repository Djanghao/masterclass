# C# Dynamic Programming 1D Array

**Author:** etredal
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/5099379/](https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/5099379/)

---

# Intuition
We can keep track of all the previous jumps scores since we may need them for the future jump.  By simply choosing the best previous jump we can find the best path to take, we also still have the original array to check that it is a valid one being jumped from.

# Approach
Dynamic programming choosing the previous best jump within target, because we can jump from any earlier jump.  The tricky part of the implementation is that for the first index it will start at zero, but any future indices will need to be not be zero to possibly be chosen.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public int MaximumJumps(int[] nums, int target) {
        int[] dp = new int[nums.Length];

        for (int j = 1; j < nums.Length; j++) {
            for (int i = 0; i < j; i++) {
                if ((nums[j] - nums[i] <= target) && (-target <= nums[j] - nums[i])) {
                    // If i is index = 0 we can add one to it for any jump we are at, but if it is not
                    // index = 0, then if the value is 0 it is unreachable.  Because i != 0 && dp[i] = 0 
                    // means that this position is unreachable.
                    if (i == 0) {
                        dp[j] = Math.Max(dp[j], 1+dp[i]);
                    } else if (i > 0 && dp[i] != 0) {
                        dp[j] = Math.Max(dp[j], 1+dp[i]);
                    }
                }
            }
        }

        return dp[^1] == 0 ? -1 : dp[^1];
    }
}
```