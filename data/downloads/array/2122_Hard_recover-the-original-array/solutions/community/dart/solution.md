# Dart implementation, O(N^2)

**Author:** yakiv_galkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-the-original-array/solutions/2905893/](https://leetcode.com/problems/recover-the-original-array/solutions/2905893/)

---

# Intuition
If we sort the array, the very first(i.e. min) element will belong to the low array, while one of the i-th elements belongs to the high array.
So we can iterate trough difference b/w first and i-th element and check our array for the match.

# Approach
Use containers (splay tree map and hash map) to efficiently find pair element within O(N^2)

# Complexity
- Time complexity:
O(N^2)

- Space complexity:
O(N)

# Code
```

import 'dart:collection';

class Solution {
  List<int> recoverArray(List<int> nums) {
    final nm = SplayTreeMap<int, int>();
    nums.forEach((n) { // n * log(n)
      if (!nm.containsKey(n))
        nm[n] = 1;
      else
        nm[n] = nm[n]! + 1;
    });

    int low = nm.firstKey()!;
    for (int high in nm.keys) // N
    {
      int k = high - low;
      if (k == 0 || k % 2 != 0) continue;
      final check = Map<int, int>.fromEntries(nm.entries);
      bool passed = true;
      for (var v in nm.keys) { // * N
        if (check[v] == 0) continue;
        if (!check.containsKey(v + k) || check[v + k]! < check[v]!) {
          passed = false;
          break;
        }
        check[v + k] = check[v + k]! - check[v]!;
      }
      if (passed) {
        return check.entries
            .where((e) => e.value != 0)
            .map((e) => List.generate(e.value, (index) => e.key + k ~/ 2))
            .expand((element) => element)
            .toList();
      }
    }
    return [];
  }
}
```