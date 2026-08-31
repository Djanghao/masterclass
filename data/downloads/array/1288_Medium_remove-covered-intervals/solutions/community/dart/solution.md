# Dart Solution

**Author:** Maqcel
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-covered-intervals/solutions/3722158/](https://leetcode.com/problems/remove-covered-intervals/solutions/3722158/)

---


# Code
```
import 'dart:core';
import 'dart:math';

class Solution {
  int removeCoveredIntervals(List<List<int>> intervals) {
    intervals.sort((a, b) {
      if (a[0] == b[0]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });

    int c = 1;
    int currFirst = intervals[0][0];
    int currSecond = intervals[0][1];

    for (int i = 1; i < intervals.length; i++) {
      if ((currFirst <= intervals[i][0] && currSecond >= intervals[i][1]) ||
          (currFirst >= intervals[i][0] && currSecond <= intervals[i][1])) {
        currFirst = min(currFirst, intervals[i][0]);
        currSecond = max(currSecond, intervals[i][1]);
      } else {
        c++;
        currFirst = intervals[i][0];
        currSecond = intervals[i][1];
      }
    }

    return c;
  }
}

```