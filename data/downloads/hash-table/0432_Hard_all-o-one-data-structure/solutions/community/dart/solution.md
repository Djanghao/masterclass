# Dart combining Set and SplayTreeMap

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-oone-data-structure/solutions/5032473/](https://leetcode.com/problems/all-oone-data-structure/solutions/5032473/)

---

# Complexity
- Time complexity: O(n log n)
- Space complexity: O(n)

# Code
```
import 'dart:collection';

class AllOne {
  Map<String, int> count = {};
  Map<int, Set<String>> sortedCount = SplayTreeMap();

  void inc(String key) => moveKey(key, 1);

  void dec(String key) => moveKey(key, -1);

  void moveKey(String key, int increment) {
    count[key] = (count[key] ?? 0) + increment;
    var to = count[key]!;
    var from = to - increment;

    if (sortedCount.containsKey(from)) {
      sortedCount[from]!.remove(key);
      if (sortedCount[from]!.isEmpty) sortedCount.remove(from);
    }
    if (to != 0) {
      sortedCount[to] = sortedCount[to] ?? {};
      sortedCount[to]!.add(key);
    }
  }

  String getMinKey() =>
      sortedCount.isEmpty ? "" : sortedCount.entries.first.value.first;

  String getMaxKey() =>
      sortedCount.isEmpty ? "" : sortedCount.entries.last.value.first;
}

```