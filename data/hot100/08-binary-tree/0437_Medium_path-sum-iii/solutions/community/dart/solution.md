# Dart, DFS + PrefixSum HashMap

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-sum-iii/solutions/5009073/](https://leetcode.com/problems/path-sum-iii/solutions/5009073/)

---

# Code
```
class Solution {
  int pathSum(TreeNode? root, int targetSum) {
    Map<int, int> prefSum = {0: 1};

    int dfs(TreeNode? root, int currentSum) {
      if (root == null) return 0;
      currentSum += root.val;
      int count = prefSum[currentSum - targetSum] ?? 0;
      prefSum[currentSum] = (prefSum[currentSum] ?? 0) + 1;
      [root.left, root.right]
          .where((node) => node != null)
          .forEach((node) => count += dfs(node, currentSum));
      prefSum[currentSum] = prefSum[currentSum]! - 1;
      return count;
    }

    return dfs(root, 0);
  }
}
```