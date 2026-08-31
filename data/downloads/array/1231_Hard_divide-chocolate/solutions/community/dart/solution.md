# Most Concise Solution

**Author:** moessam00
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-chocolate/solutions/5143108/](https://leetcode.com/problems/divide-chocolate/solutions/5143108/)

---

# Code
```
import 'dart:math';

class Solution {
  late int no_of_people;
  int maximizeSweetness(List<int> sweetness, int k) {
    no_of_people = k + 1;

    int left = sweetness.reduce(min);
    int right = sweetness.reduce((a, b) => a + b) ~/ no_of_people;

    while (left <= right) {
      int mid = left + (right - left) ~/ 2;

      if (check(mid, sweetness))
        left = mid + 1;
      else
        right = mid - 1;
    }
    return right;
  }

  bool check(int mid, List<int> sweetness) {
    int curr = 0;
    int count = 0;
    for (var s in sweetness) {
      curr += s;
      if (curr >= mid) {
        count++;
        curr = 0;
      }
    }
    return count >= no_of_people;
  }
}

```