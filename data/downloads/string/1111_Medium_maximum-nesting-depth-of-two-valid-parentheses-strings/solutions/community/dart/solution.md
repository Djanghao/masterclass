# Dart Solution

**Author:** rifathossain82
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/4970692/](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/4970692/)

---

# Code
```dart
class Solution {
  List<int> maxDepthAfterSplit(String seq) {
    int n = seq.length;
    int depth = 0;
    List<int> v = [];

    for (int i = 0; i < n; i++) {
      if (seq[i] == '(') {
        depth++;
        v.add(depth % 2);
      }
      if (seq[i] == ')') {
        v.add(depth % 2);
        depth--;
      }
    }
    return v;
  }
}
```