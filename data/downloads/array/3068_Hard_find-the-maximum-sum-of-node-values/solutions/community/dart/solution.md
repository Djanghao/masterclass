# Dart solution

**Author:** Dartist
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5176745/](https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5176745/)

---

# Code
```
class Solution {
  int maximumValueSum(List<int> nums, int k, List<List<int>> edges) {
    int d = 1 << 30, cnt = 0, sum = 0;
    for (int num in nums) {
      final b = num ^ k;
      sum += max(num, b);
      cnt ^= num < b ? 1 : 0;
      d = min(d, (num - b).abs());
    }
    return sum - d * cnt;
  }
}
```