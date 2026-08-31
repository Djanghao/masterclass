# Simple Dart Solution

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3517772/](https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3517772/)

---



# Approach
If i is greater than or equal to zero, the code adds dp[i-zero] to dp[i], since we can append zero characters to the end of any good string of length i-zero to get a good string of length i.

If i is greater than or equal to one, the code adds dp[i-one] to dp[i], since we can append one character to the end of any good string of length i-one to get a good string of length i.

After computing dp, the code then computes the number of good strings in the range [low, high] by summing up the values of dp[i] for i in the range [low, high].
# Complexity
- Time complexity:
O(high)

# Code
```
class Solution {
  int countGoodStrings(int low, int high, int zero, int one) {
    List<int> dp = List.filled(high + 1, 0);
    int res = 0, mod = 1000000007;
    dp[0] = 1;
    for (int i = 1; i <= high; ++i) {
      if (i >= zero) {
        dp[i] = (dp[i] + dp[i - zero]) % mod;
      }
      if (i >= one) {
        dp[i] = (dp[i] + dp[i - one]) % mod;
      }
      if (i >= low) {
        res = (res + dp[i]) % mod;
      }
    }
    return res;
  }
}

```