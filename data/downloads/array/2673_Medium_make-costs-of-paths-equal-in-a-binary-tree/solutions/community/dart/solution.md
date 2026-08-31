# Solution with ⚡⚡⚡DFS algorithm 💕

**Author:** king77nt54321
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/5509401/](https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/5509401/)

---



# Code
```
import 'dart:math';

class Solution {
  int minIncrements(int n, List<int> cost) {
    int totalIncrements = 0;

    // H\xE0m \u0111\u1EC7 quy \u0111\u1EC3 t\xEDnh t\u1ED5ng chi ph\xED t\u1EEB g\u1ED1c \u0111\u1EBFn c\xE1c l\xE1
    int dfs(int node) {
      if (node > n) return 0; // N\u1EBFu node v\u01B0\u1EE3t qu\xE1 s\u1ED1 node trong c\xE2y, tr\u1EA3 v\u1EC1 0

      int leftSum = dfs(node * 2); // T\u1ED5ng chi ph\xED t\u1EEB node con tr\xE1i
      int rightSum = dfs(node * 2 + 1); // T\u1ED5ng chi ph\xED t\u1EEB node con ph\u1EA3i

      // T\u1ED5ng chi ph\xED c\u1EE7a node hi\u1EC7n t\u1EA1i
      int currentSum = cost[node - 1] + max(leftSum, rightSum);

      // T\xEDnh s\u1ED1 l\u1EA7n t\u0103ng chi ph\xED c\u1EA7n thi\u1EBFt
      totalIncrements += (leftSum - rightSum).abs();

      return currentSum;
    }

    dfs(1); // B\u1EAFt \u0111\u1EA7u t\u1EEB node g\u1ED1c (1)
    return totalIncrements;
  }
}
```