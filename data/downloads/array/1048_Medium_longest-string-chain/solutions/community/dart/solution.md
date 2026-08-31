# Dart

**Author:** darv
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-string-chain/solutions/4078741/](https://leetcode.com/problems/longest-string-chain/solutions/4078741/)

---

# Code
```
import 'dart:collection';
import 'dart:math';

class Solution {
  int longestStrChain(List<String> words) {
    final hashmap = HashMap<String, int>();
    for (final s in words) hashmap[s] = -1;
    
    int dfs(String s) {
      var prev = hashmap[s];
      if (prev == null) return 0;
      if (prev == -1) {
        prev = 1;
        for (int i = 0; i < s.length; i++) {
          final t = s.substring(0, i) + s.substring(i + 1);
          prev = max(prev!, 1 + dfs(t));
        }
        hashmap[s] = prev!;
      }
      return prev;
    }
    var res = 0;
    for (final s in words)
      res = max(res, dfs(s));
    return res;
  }
}
```