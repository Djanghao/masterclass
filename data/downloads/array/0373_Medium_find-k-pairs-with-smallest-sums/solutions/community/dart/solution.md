# Dart, using PriorityQueue

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/5189664/](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/5189664/)

---

# Code
```
import 'package:collection/collection.dart';

class Solution {
  List<List<int>> kSmallestPairs(List<int> nums1, List<int> nums2, int k) {
    List<List<int>> result = [];
    var pq = PriorityQueue<(int, int, int)>(
        (a, b) => (a.$1 + a.$2).compareTo(b.$1 + b.$2));

    // bootstrap priorityqueue with
    // all pair from all elements of nums1 + first element of nums2
    nums1.forEach((n) => pq.add((n, nums2.first, 0)));

    while (k-- > 0 && pq.isNotEmpty) {
      final (n1, n2, i) = pq.removeFirst();
      result.add([n1, n2]);
      if (i + 1 < nums2.length) {
        pq.add((n1, nums2[i + 1], i + 1));
      }
    }
    return result;
  }
}

```