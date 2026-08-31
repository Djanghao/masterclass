# Dart

**Author:** ShahbozTuronov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/3572955/](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/3572955/)

---

# Complexity
- Time complexity: 100%
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 100%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
 int minCost(int n, List<int> cuts) {
  cuts.sort(); // Sort the cuts in ascending order
  final int m = cuts.length;
  
  // Create a 2D memoization table to store the minimum costs
  final List<List<int>> dp = List.generate(m + 2, (index) => List.filled(m + 2, 0));
  
  // Add the start and end points to the cuts list
  cuts.insert(0, 0);
  cuts.add(n);
  
  for (int len = 2; len <= m + 1; len++) {
    for (int i = 0; i + len <= m + 1; i++) {
      int j = i + len;
      dp[i][j] =10000000000;
      
      for (int k = i + 1; k < j; k++) {
        dp[i][j] = dp[i][j].compareTo(dp[i][k] + dp[k][j]) < 0 ? dp[i][j] : dp[i][k] + dp[k][j];
      }
      
      dp[i][j] += cuts[j] - cuts[i];
    }
  }
  
  return dp[0][m + 1];
}

}
```