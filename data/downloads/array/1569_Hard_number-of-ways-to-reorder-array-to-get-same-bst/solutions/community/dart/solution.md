# [Dart] DFS

**Author:** aospiridonov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3643947/](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3643947/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int numOfWays(List<int> nums) {
    int n = nums.length, mod = 1000000007;
    final table = List<List<int>>.generate(n, (_) => List<int>.filled(n, 0));
    for (int i = 0; i < n; i++) {
      table[i][0] = table[i][i] = 1;
    }
    for (int i = 2; i < n; i++) {
      for (int j = 1; j < i; j++) {
        table[i][j] = (table[i - 1][j - 1] + table[i - 1][j]) % mod;
      }
    }
    int dfs(List<int> nums) {
      int n = nums.length;
      if (n < 3) return 1;
      final leftNodes = <int>[], rightNodes = <int>[];
      for (int i = 1; i < n; i++) {
        if (nums[i] < nums[0]) {
          leftNodes.add(nums[i]);
        } else {
          rightNodes.add(nums[i]);
        }
      }
      int leftWays = dfs(leftNodes) % mod, rightWays = dfs(rightNodes) % mod;
      return (((leftWays * rightWays) % mod) * table[n - 1][leftNodes.length]) %
          mod;
    }

    return ((dfs(nums) - 1) % mod);
  }
}
```