# O(n log n) and O(n) Simple Dart Solution

**Author:** abdullahq019
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-intervals/solutions/5741323/](https://leetcode.com/problems/merge-intervals/solutions/5741323/)

---

# Complexity
### - Time complexity: O(n log n)
### - Space complexity: O(n)

# Code
```dart []
class Solution {
  List<List<int>> merge(List<List<int>> intervals) {
    List<List<int>> res = [];
    intervals.sort((a, b) => a[0].compareTo(b[0]));

    for (var array in intervals) {
      if (res.isEmpty) {
        res.add(array);
        continue;
      }
      int last = res.last[1];
      if (array.first > last) {
        res.add(array);
        continue;
      }

      if (array.last > last) {
        res.last[1] = array.last;
      }
    }
    return res;
  }
}

```