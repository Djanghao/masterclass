# Concise Dart 3 solution

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/non-overlapping-intervals/solutions/5027975/](https://leetcode.com/problems/non-overlapping-intervals/solutions/5027975/)

---

# Code
```
class Solution {
  int eraseOverlapIntervals(List<List<int>> intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    var count = 0;
    var previousEnd = intervals.first.last;
    for (var [start, end] in intervals) {
      if (start < previousEnd) {
        count++;
      } else {
        previousEnd = end;
      }
    }
    return count - 1;
  }
}
```