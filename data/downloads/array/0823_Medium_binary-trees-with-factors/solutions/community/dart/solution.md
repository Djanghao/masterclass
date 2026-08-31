# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-trees-with-factors/solutions/4208969/](https://leetcode.com/problems/binary-trees-with-factors/solutions/4208969/)

---

# Code
```
import 'dart:collection';
class Solution {
  int numFactoredBinaryTrees(List<int> arr) {
    arr.sort();
    final g = List.generate(arr.length, (_) => <int>[]);
    final db = HashMap<int, int>();
    for (int i = 0; i < arr.length; i++) {
      db[arr[i]] = i;
      for (int j = 0; j < i; j++) {
        if (arr[i] % arr[j] == 0)
          g[i].add(j);
      }
    }
    const MOD = 1000000007;
    final dp = <int>[];
    var res = 0;
    for (int i = 0; i < arr.length; i++) {
      var tmp = 1;
      for (int j in g[i]) {
        var another = db[arr[i] / arr[j]];
        if (another != null)
          tmp = (tmp + dp[j] * dp[another]) % MOD;
      }
      res = (res + tmp) % MOD;
      dp.add(tmp);
    }
    return res;
  }
}
```