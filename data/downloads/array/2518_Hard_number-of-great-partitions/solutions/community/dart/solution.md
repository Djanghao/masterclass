# [Dart] Recursion + Memo + Mod Handling & well commented solution

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-great-partitions/solutions/3000553/](https://leetcode.com/problems/number-of-great-partitions/solutions/3000553/)

---

# Intuition
Knapsack + Mod Handling

# Approach
DP

# Complexity
- Time complexity:
O(N*K) + O(N+K) Stack Space

- Space complexity:
O(N*K)

# Code
```
class Solution {
  int countPartitions(List<int> nums, int k) {
    int n = nums.length;
    int mod = 1e9.toInt() + 7;

    // If the total sum is less than 2k, it must be 0
    // U know we are looking for 2 partitions with greater than or equals to k
    int total = nums.reduce((value, element) => value + element);
    if (total < 2 * k) return 0;

    // For 2^n, custom 2^n, coz of large constranit and mod
    int possiblePermutationCount = 1;
    for (int i = 1; i <= n; i++) {
      possiblePermutationCount = ((possiblePermutationCount % mod) * 2) % mod;
    }

    List<List<int?>> dp = List.generate(
      n,
      (index) => List.filled(k + 1, null),
    );
    // Count less than k sum
    int f(int i, int sum) {
      if (i == n) {
        if (sum < k) {
          return 1;
        }
        return 0;
      }
      if (dp[i][sum] != null) {
        return dp[i][sum]!;
      }
      int pick = 0;
      if (nums[i] + sum < k) {
        pick = f(i + 1, nums[i] + sum) % mod;
      }
      int notPick = f(i + 1, sum) % mod;

      return dp[i][sum] = (pick + notPick) % mod;
    }
    // Muliply by 2 coz we gonna take [4][1,2,3,4] and [1,2,3][4]
    int res = possiblePermutationCount - (2 * f(0, 0));
    // This one is still confusing if the value go negative we should plus mod to get answer
    // Kind of mod things, I got the below line from other solution
    if(res<0)res+=mod;
    return res;
  }
}
```