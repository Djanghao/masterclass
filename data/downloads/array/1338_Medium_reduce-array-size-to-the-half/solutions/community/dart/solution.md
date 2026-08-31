# Dart Solution

**Author:** moessam00
**Votes:** 0
**Link:** [https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/5141321/](https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/5141321/)

---

# Code
```
import 'dart:collection';

class Solution {
  int minSetSize(List<int> arr) {
    int ans = 0;

    var map = HashMap<int, int>();
    for (var element in arr) {
      map.update(
        element,
        (value) => value + 1,
        ifAbsent: () => 1,
      );
    }
    var freq = map.entries.toList()
      ..sort(
        (a, b) => b.value.compareTo(a.value),
      );
    int n = arr.length ~/ 2;
    for (var MapEntry(:key, :value) in freq) {
      n -= value;
      ans++;
      if (n <= 0) {
        return ans;
      }
    }
    return ans;
  }
}

```