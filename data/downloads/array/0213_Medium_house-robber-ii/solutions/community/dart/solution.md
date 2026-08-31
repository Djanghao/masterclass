# Dart DP solution

**Author:** Allicolyer
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-ii/solutions/4176498/](https://leetcode.com/problems/house-robber-ii/solutions/4176498/)

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
  int rob(List<int> nums) {
    // Similar to house robber I, the value at any given house is as follows:
    // dp[i] = dp[i] + max[dp[i-2] .... dp[0]]
    // However there is an extra condition
    // that if i is the last house, we cannot use any value
    // that involved robbing the first house
    if (nums.length == 0) return 0;
    // At each index, there is a list of two values.
    // The first value represents the outcome if we rob the first house
    // The second value represents if we don't rob the first house
    List<List<int>> dp = List<List<int>>.filled(nums.length, []);
    int firstHouseValue = nums[0];
    int maxValue = firstHouseValue;
    dp[0] = [firstHouseValue, 0];
    for (int i = 1; i < dp.length; i++) {
      int value = nums[i];
      // Initalize the list with the value of this house
      dp[i] = [nums[i], nums[i]];
      // Check all the houses that came before it
      for (int j = 0; j < i - 1; j++) {
        dp[i] = [
          max(dp[i][0], value + dp[j][0]),
          max(dp[i][1], value + dp[j][1])
        ];
      }
      if (i == dp.length - 1) {
        // If we are at the last house, we cannot rob the first house,
        // check only the value of the one without robbing the first house
        maxValue = max(maxValue, dp[i][1]);
      } else {
        // In all other cases we can use the value that includes robbing the
        // first home. We expect this value to always be equal to or larger
        // than dp[i][1] because it includes the extra house.
        maxValue = max(maxValue, dp[i][0]);
      }
    }
    return maxValue;
  }
}

```