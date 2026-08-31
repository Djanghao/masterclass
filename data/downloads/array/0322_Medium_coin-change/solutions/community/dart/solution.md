# [Dart] [Dynamic Programming] Two Approaches:  Iteration [Accepted] and Recusion [StackOverflowed].

**Author:** anhtrungcuccua1
**Votes:** 0
**Link:** [https://leetcode.com/problems/coin-change/solutions/5147999/](https://leetcode.com/problems/coin-change/solutions/5147999/)

---

# Intuition
Dynamic Programming

#  Two Approaches

## Iteration
Iteration: From 1 to amount.
Find the least number of coins at each amount.

## Recursion with cache.
Find the minimum amount of coint at each choice.


# Code: Iteration
```
class Solution {
  static const maxInt = 100001;

  int coinChange(List<int> coins, int amount) {
    final dp = List.filled(amount + 1, 0);

    for (int i = 1; i < dp.length; i++) {
      int currentMin = maxInt;
      for (final coin in coins) {
        if (i - coin >= 0) {
          final last = dp[i - coin];
          if (last != maxInt) currentMin = min(currentMin, last);
        }
      }

      dp[i] = currentMin == maxInt ? maxInt : currentMin + 1;
    }

    return dp.last == maxInt ? -1 : dp.last;
  }
}
```

# Code:  Recurion with cache (Stack Overflowed)

```
class Solution {
  static const maxInt = 100001;

  int coinChange(List<int> coins, int amount) {
      return dp(coins, 0, amount, <int, int>{});
  }

  int dp(List<int> coins, int currentTotal, int amount, Map<int, int> cache) {
    if (currentTotal > amount) return -1;
    if (currentTotal == amount) return 0;
    if (cache.containsKey(currentTotal)) return cache[currentTotal] ?? 0;

    int minResult = maxInt;
    for (final coin in coins) {
      final tmp = dp(coins, currentTotal + coin, amount, cache);
      if (tmp != -1) {
        minResult = min(minResult, tmp);
      }
    }

    final x = minResult == maxInt ? -1 : 1 + minResult;
    cache[currentTotal] = x;

    return x;
  }
}
```
