# Simple Dart Solution

**Author:** AndreLock
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-texts/solutions/3552473/](https://leetcode.com/problems/count-number-of-texts/solutions/3552473/)

---


# Approach
My first solution used recursion, but no matter how I did it I would always get a stack overflow error due to too much reucrsion so I made this solution using tabulation.

# Code
```
class Solution {
  int mod = 1000000007;

  int countTexts(String pressedKeys) {
    List<int> key = [0, 0, 3, 3, 3, 3, 3, 4, 3, 4];
    int n = pressedKeys.length;
    List<int> dp = List<int>.filled(n + 1, 0);
    dp[n] = 1;

    for (int ind = n - 1; ind >= 0; ind--) {
      int count = 0;
      int num = pressedKeys.codeUnitAt(ind) - '0'.codeUnitAt(0);
      int rep = key[num];
      for (int i = 0; i < rep && ind + i < pressedKeys.length && pressedKeys[ind] == pressedKeys[ind + i]; i++) {
        count += dp[ind + i + 1];
        count %= mod;
      }
      dp[ind] = count;
    }
    return dp[0];
  }
}

```