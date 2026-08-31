# [Dart] Kadane's Algorithm

**Author:** aospiridonov
**Votes:** 1
**Link:** [https://leetcode.com/problems/substring-with-largest-variance/solutions/3739827/](https://leetcode.com/problems/substring-with-largest-variance/solutions/3739827/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach: 
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n\\cdot k^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int largestVariance(String s) {
    final counter = List<int>.filled(26, 0);
    for (final codeUnit in s.codeUnits) {
      counter[codeUnit - 97]++;
    }
    int globalMax = 0;
    for (int i = 0; i < 26; i++) {
      for (int j = 0; j < 26; j++) {
        if (i == j || counter[i] == 0 || counter[j] == 0) continue;
        int major = 97 + i, minor = 97 + j, majorCount = 0, minorCount = 0;
        int restMinor = counter[j];
        for (final codeUnit in s.codeUnits) {
          if (codeUnit == major) {
            majorCount++;
          }
          if (codeUnit == minor) {
            minorCount++;
            restMinor--;
          }

          if (minorCount > 0) {
            globalMax = max(globalMax, majorCount - minorCount);
          }
          if (majorCount < minorCount && restMinor > 0) {
            majorCount = 0;
            minorCount = 0;
          }
        }
      }
    }
    return globalMax;
  }
}
```