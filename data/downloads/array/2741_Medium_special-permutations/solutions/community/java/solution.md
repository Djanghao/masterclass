# [Java/C++/Python Code] Easy Intuition || DP BitMask

**Author:** Aditya00
**Votes:** 23
**Link:** [https://leetcode.com/problems/special-permutations/solutions/3650962/](https://leetcode.com/problems/special-permutations/solutions/3650962/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition of the solution is that we can break down the problem of counting the number of special permutations into smaller subproblems. Each subproblem corresponds to a state, where the state is represented by a bitmask that indicates which numbers have already been used.

We can solve each subproblem recursively. The base case is when the state is all zeros, which corresponds to the case where no numbers have been used. In this case, there is only one special permutation, which is the empty permutation.

For the recursive case, we iterate over all the numbers that have not been used yet. For each number, we check if it is divisible by any of the numbers that have already been used. If it is, then we can add the number of special permutations for the next state to the total.

The total number of special permutations is the sum of the number of special permutations for all the states.

- Time complexity: O(N * (2 ^ N) * N)

- Space complexity: O(N * (2 ^ N) * N)

# C++ Code
```
class Solution {
public:
  const int mod = 1e9 + 7; 

  int helper(vector<int>& nums, int j, int i, int msk, vector<vector<int>>& dp) {
    // Recursively calculates the number of special permutations of the given numbers.

    if (i == nums.size()) {
      // Base case: If we have reached the end of the numbers, there is only one special permutation.
      return 1;
    }

    if (dp[j + 1][msk] != -3) {
      // Memoization: If we have already calculated the number of special permutations for this state, return it.
      return dp[j + 1][msk];
    }

    int total = mod; // The total number of special permutations.
    for (int ind = 0; ind < nums.size(); ind++) {
      // Iterate over all the numbers.
      if (msk & (1 << ind)) {
        continue; // Skip this number if it has already been used.
      }

      if (j == -1 || nums[ind] % nums[j] == 0 || nums[j] % nums[ind] == 0) {
        // If this number is divisible by the previous number, or if there is no previous number,
        // then add the number of special permutations for the next state to the total.
        total += helper(nums, ind, i + 1, msk | (1 << ind), dp) % mod;
        total %= mod;
      }
    }

    // Save the number of special permutations for this state in the memoization table.
    dp[j + 1][msk] = total;

    // Return the number of special permutations.
    return total;
  }

  int specialPerm(vector<int>& nums) {
    vector<vector<int>> dp(21, vector<int>((1 << 14) + 7, -3));
    return helper(nums, -1, 0, 0, dp) % mod;
  }
};

```
# Java Code 
```
class Solution {
    int MOD = (int)1e9 + 7;
    int N;
    Integer[][] memo;
    int[] nums;
    public int specialPerm(int[] nums) {
        this.N = nums.length;
        this.memo = new Integer[N][1 << N];
        this.nums = nums;
        return backtrack(0, 0);
    }
    //mask = available element to choose from
    private int backtrack(int preIndex, int mask) {
        if (mask == (1 << N) - 1) return 1;
        if (memo[preIndex][mask] != null) return memo[preIndex][mask];
        int count = 0;
        for (int i = 0; i < N; i++)
            if ((mask & (1 << i)) == 0 && 
                (mask == 0 || nums[i] % nums[preIndex] == 0 || nums[preIndex] % nums[i] == 0))
                count = (count + backtrack(i, mask | (1 << i))) % MOD; //used.add(i);
        return memo[preIndex][mask] = count;
    }
} 
```
# Python Code 
```
class Solution:
    MOD = int(1e9) + 7

    def helper(self, nums, j, i, msk, dp):
        if i == len(nums):
            return 1

        if dp[j + 1][msk] != -3:
            return dp[j + 1][msk]

        total = self.MOD
        for ind in range(len(nums)):
            if msk & (1 << ind):
                continue

            if j == -1 or nums[ind] % nums[j] == 0 or nums[j] % nums[ind] == 0:
                total += self.helper(nums, ind, i + 1, msk | (1 << ind), dp) % self.MOD
                total %= self.MOD

        dp[j + 1][msk] = total
        return total

    def specialPerm(self, nums):
        dp = [[-3] * ((1 << 14) + 7) for _ in range(21)]
        return self.helper(nums, -1, 0, 0, dp) % self.MOD
```
