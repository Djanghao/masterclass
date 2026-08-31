# Dart

**Author:** darv
**Votes:** 3
**Link:** [https://leetcode.com/problems/strange-printer/solutions/3835864/](https://leetcode.com/problems/strange-printer/solutions/3835864/)

---

# Code
```
import 'dart:math';

class Solution {
  int strangePrinter(String s) {
    final N = s.length;
    final memo = List.generate(N, (_) => List.filled(N, -1));
    
    int search(int A, int B) {
      if (A > B) return 0;
      if (A == B) return 1;
      if (memo[A][B] == -1) {
        var best = search(A + 1, B) + 1;        
        for (int j = A + 1; j <= B; j++) {
          if (s[A] == s[j])
            best = min(best, search(A + 1, j - 1) + search(j, B));
        }        
        memo[A][B] = best;
      }
      return memo[A][B];          
    }
    
    return search(0, N - 1);
  }
}
```