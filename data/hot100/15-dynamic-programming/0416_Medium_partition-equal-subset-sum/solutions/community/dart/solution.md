# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-equal-subset-sum/solutions/4942633/](https://leetcode.com/problems/partition-equal-subset-sum/solutions/4942633/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
A valid answer is one where the sum of nums is even. Otherwise you cannot partition it in any way to satisfy the condition where the sum of nums is odd. Other than that, this is a Knapsack dynamic programming problem where we can either include the current number or skip it and choose the next one. Create a memo array to store results.

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
    bool canPartition(List<int> nums) {
        final sum = nums.fold<int>(0, (a, b) => a + b);
        final target = sum ~/ 2;
        if (sum % 2 != 0) {
            return false;
        }

        final List<List<int>> memo = List<List<int>>.generate(nums.length, (_) => List<int>.filled(target + 1, -1));
        return helper(nums, 0, target, memo);
    }

    bool helper(List<int> nums, int index, int target, List<List<int>> memo) {
        if (index >= nums.length || target < 0) {
            return false;
        }

        if (target == 0) {
            return true;
        }

        if (memo[index][target] != -1) {
            return memo[index][target] == 1;
        }

        final include = helper(nums, index + 1, target - nums[index], memo);
        final exclude = helper(nums, index + 1, target, memo);

        memo[index][target] = (include || exclude) ? 1 : 0;

        return memo[index][target] == 1;
    }
}
```