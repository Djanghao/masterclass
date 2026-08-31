# Dart Solution DP + Bitmask

**Author:** AndreLock
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3524597/](https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3524597/)

---



# Complexity
// Time: O(2^n * n^2)
// Space: O(2 ^ n)

# Code
```
class Solution {
  int maxScore(List<int> nums) {
    int n = nums.length;
    Map<int, int> gcdVal = Map<int, int>(); // use a map to store the GCD values
    for (int i = 0; i < n; ++i) {
      for (int j = i + 1; j < n; ++j) {
        gcdVal[(1 << i) + (1 << j)] = gcd(nums[i], nums[j]); // use bitwise operations to encode the pairs
      }
    }
    List<int> dp = List.filled(1 << n, 0); // use a list to store the dynamic programming values
    for (int i = 0; i < (1 << n); ++i) {
      int bits = bitCount(i); // how many numbers are used
      if (bits % 2 != 0) // odd numbers, skip it
        continue;
      for (int k in gcdVal.keys) {
        if ((k & i) != 0) // overlapping used numbers
          continue;
        dp[i ^ k] = max(dp[i ^ k], dp[i] + (gcdVal[k] ?? 0) * (bits ~/ 2 + 1)); // update the maximum score
      }
    }
    return dp[(1 << n) - 1];
  }

  int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
  }
}
int bitCount(int n) {
  int count = 0;
  while (n > 0) {
    count += n & 1; // add the rightmost bit
    n >>= 1; // right shift by one bit
  }
  return count;
}

```