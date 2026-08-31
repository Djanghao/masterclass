# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3840223/](https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3840223/)

---

# Code
```
class Solution {
static const MOD = 1000000007;
  static const DELTA = [-1, 1];
  int countSteppingNumbers(String low, String high) {

    final dp = List.generate(10, (_) => List.filled(110, 0));
    for (int i = 0; i < 10; i++) dp[i][1] = 1;
    
    for (int j = 2; j <= 100; j++) {
      for (int i = 0; i < 10; i++) {
        var tmp = 0;
        for (final d in DELTA) {
          final int next = i + d;
          if (next > 9 || next < 0) continue;
          tmp += dp[next][j - 1];
        }
        dp[i][j] = tmp % MOD;
      }
    }
    
    int stoi(String ch) => ch.codeUnitAt(0) - '0'.codeUnitAt(0);
    
    int dfs(String s, int digit, int idx) {
      if (digit > 9 || digit < 0) return 0;
      if (digit > stoi(s[idx])) return 0;
      if (digit < stoi(s[idx]))
        return dp[digit][s.length - idx];
      if (idx == s.length - 1) return 1;
      
      var res = 0;
      for (final d in DELTA)
        res += dfs(s, d + digit, idx + 1);
      return res % MOD;
    }
    
    bool test(String s) {
      for (int i = 1; i < s.length; i++)
        if ((stoi(s[i]) - stoi(s[i - 1])).abs() != 1) return false;
      return true;
    }
    
    int helper(String s) {
      var res = 0;
      
      for (int j = 1; j < s.length; j++)
        for (int i = 1; i < 10; i++)
          res += dp[i][j];
      for (int i = 1; i < stoi(s[0]); i++)
        res += dp[i][s.length];
      
      res += dfs(s, stoi(s[0]), 0);
      return res % MOD;
    }
    
    return (helper(high) - helper(low) + MOD + (test(low) ? 1 : 0)) % MOD;
  }
  
}
```