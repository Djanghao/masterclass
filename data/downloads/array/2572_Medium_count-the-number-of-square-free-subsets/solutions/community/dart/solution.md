# [Dart] Explained Intuition and Approach

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3216909/](https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3216909/)

---

The problem should be tagged as Hard, somehow it is medium.

# Intuition
We need to check two conditions. The nums is already not square free and prime * prime can not be square free. 


# Approach
To encounter the above cases, we have low constraint 0 to 30, find square free for 0 to 30, as if square free set the mask, else -1. If sqf[num] == -1 (means it is not square free themself) or mask already has that number(prime * prime is not square free, so not allowed to do that), we don't pick it.

# Complexity
- Time complexity:
O(N*1024)

- Space complexity:
O(N*1024)

# Code
```
import 'dart:collection';

class Solution {
  int squareFreeSubsets(List<int> nums) {
    int mod = 1e9.toInt() + 7;
    int n = nums.length;

    List<List<int?>> dp = List.generate(
      n,
      (index) => List.filled(1 << 10, null),
    );

    // If the nums is not square free -1 else mask
    // So, we don't need to loop and check everytime for is the num square free or not
    var sqf = squareFreeList();

    int f(int i, int mask) {
      if (i >= n) {
        return 1;
      }

      if (dp[i][mask] != null) {
        return dp[i][mask]!;
      }
      int pick = 0;
      // If already multiply prime nums like 4, 9, 12, or mask already have the same currnent num we skipped
      // If not multiply prime nums and mask doesn't have the duplicate
      if (sqf[nums[i]] != -1 && (mask & sqf[nums[i]]) == 0) {
        pick = f(i + 1, mask ^ sqf[nums[i]]);
      }

      int notPick = f(i + 1, mask);

      return dp[i][mask] = (pick + notPick) % mod;
    }

    int ans = f(0, 0) - 1;
    if (ans.isNegative) {
      ans += mod;
    }
    return ans;
  }

  List<int> squareFreeList() {
    var primes = [
      2,
      3,
      5,
      7,
      11,
      13,
      17,
      19,
      23,
      29
    ]; // list of all primes <= 30

    var sqf = List.filled(31, -1);

    for (int i = 1; i <= 30; i++) {
      if (i == 1) {
        sqf[i] = 0; // special case for 0
      } else {
        bool isSquareFree = true;
        int mask = 0;
        for (int j = 0; j < 10; j++) {
          if (i % primes[j] == 0) {
            if (i % (primes[j] * primes[j]) == 0) {
              isSquareFree = false;
              break;
            } else {
              mask ^= (1 << j);
            }
          }
        }
        if (isSquareFree) {
          sqf[i] = mask;
        }
      }
    }
    return sqf;
  }
}
```