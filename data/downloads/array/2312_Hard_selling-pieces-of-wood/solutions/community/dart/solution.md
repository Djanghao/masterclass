# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/selling-pieces-of-wood/solutions/4086460/](https://leetcode.com/problems/selling-pieces-of-wood/solutions/4086460/)

---

# Code
```
import 'dart:math';

class Solution {
  int sellingWood(final int M, final int N, List<List<int>> prices) {
    final memo = List.generate(M + 1, (_) => List.filled(N + 1, 0));
    for (final price in prices) {
      final int h = price[0], w = price[1], profit = price[2];
      memo[h][w] = profit;
    }
    
    final vis = List.generate(M + 1, (_) => List.filled(N + 1, false));

    int dfs(final int height, final int width) {
      if (height == 0 || width == 0) return 0;
      if (vis[height][width]) return memo[height][width];
      vis[height][width] = true;
      
      var tmp = memo[height][width];
      for (int left = 1; left < height; left++)
        tmp = max(tmp, dfs(left, width) + dfs(height - left, width));
      
      for (int left = 1; left < width; left++)
        tmp = max(tmp, dfs(height, left) + dfs(height, width - left));

      memo[height][width] = tmp;
      return memo[height][width];
    }

    return dfs(M, N);
  }
}
```