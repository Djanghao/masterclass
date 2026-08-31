# Dart Dfs

**Author:** darv
**Votes:** 1
**Link:** [https://leetcode.com/problems/filling-bookcase-shelves/solutions/3729990/](https://leetcode.com/problems/filling-bookcase-shelves/solutions/3729990/)

---

# Intuition
Memoized Search

# Code
```
import 'dart:math';

class Solution {
  int minHeightShelves(List<List<int>> books, int shelfWidth) {
    final N = books.length;
    final memo = List.filled(N + 1, -1);
    memo[N] = 0;
    
    int dfs(int idx) {
      if (memo[idx] != -1) return memo[idx];
      int res = 1 << 30;
      int width = 0, height = 0;
      for (int i = idx; i < N && width + books[i][0] <= shelfWidth; i++) {
        width += books[i][0];
        height = max(height, books[i][1]);
        res = min(res, height + dfs(i + 1));
      }
      return memo[idx] = res;
    }
    
    return dfs(0);
  }
}

```