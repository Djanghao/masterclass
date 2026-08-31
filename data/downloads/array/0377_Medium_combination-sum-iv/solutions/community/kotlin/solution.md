# [Kotlin] Dynamic Programming Approach for Counting Combinations to Reach Target

**Author:** teogor
**Votes:** 4
**Link:** [https://leetcode.com/problems/combination-sum-iv/solutions/5002608/](https://leetcode.com/problems/combination-sum-iv/solutions/5002608/)

---

# Intuition
To solve this problem, we can use dynamic programming. The idea is to iteratively build up the number of combinations for each target value using previously computed results.

# Approach
We initialize a dynamic programming array `dp` of size `target + 1`, where `dp[i]` represents the number of possible combinations to reach the target `i`. We set `dp[0] = 1` because there is one way to reach the target `0`, which is by not choosing any element from the `nums` array.

We then iterate through the target values from `1` to `target`. For each target value `i`, we iterate through the elements of the `nums` array. For each element `num` in `nums`, if `i - num >= 0`, we add the number of combinations to reach `i - num` to `dp[i]`. This accounts for all possible combinations that include `num` as part of the solution.

After updating the `dp` array, the answer will be `dp[target]`, which represents the number of possible combinations to reach the target value `target`.

# Complexity
- Time complexity: O(target * n), where `n` is the length of the `nums` array.

- Space complexity: O(target)

# Code
```
class Solution {
    fun combinationSum4(nums: IntArray, target: Int): Int {
        val dp = IntArray(target + 1)
        dp[0] = 1
        for (i in 1..target) {
            for (num in nums) {
                if (i - num >= 0) {
                    dp[i] += dp[i - num]
                }
            }
        }
        return dp[target]
    }
}

```