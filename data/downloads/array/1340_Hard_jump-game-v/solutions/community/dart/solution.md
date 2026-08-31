# DFS + Memoization (Dart)

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-v/solutions/2903713/](https://leetcode.com/problems/jump-game-v/solutions/2903713/)

---

# Intuition
Try all possibilities

# Approach
DFS + DP

# Complexity
- Time complexity:
2^N*d

- Space complexity:
O(N)

# Code
```
import "dart:math" as math;

class Solution {
  int maxJumps(List<int> arr, int d) {
    int n = arr.length;
    List<bool> visited = List.filled(n, false);
    List<int?> dp = List.filled(n, null);

    bool canJumpR(int start, int end) {
      bool canJump = true;

      for (var i = start + 1; i <= end; i++) {
        if (arr[start] <= arr[i]) {
          canJump = false;
          break;
        }
      }
      return canJump;
    }

    bool canJumpL(int start, int end) {
      bool canJump = true;
      for (var i = start - 1; i >= end; i--) {
        if (arr[start] <= arr[i]) {
          canJump = false;
          break;
        }
      }
      return canJump;
    }

    int f(int i) {
      if (visited[i]) return 0;
      int max = -1e9.toInt();
      if (dp[i] != null) return dp[i]!;
      for (var x = 1; x <= d; x++) {
        visited[i] = true;
        int r = 0, l = 0;
        if (i + x < n && canJumpR(i, i + x)) {
          r = 1 + f(i + x);
        }
        if (i - x >= 0 && canJumpL(i, i - x)) {
          l = 1 + f(i - x);
        }
        visited[i] = false;
        max = math.max(max, math.max(l, r));
      }
      return dp[i] = max;
    }

    int max = 1;
    for (var i = 0; i < n; i++) {
      max = math.max(max, f(i) + 1);
    }

    return max;
  }
}
```