# Dart Solution

**Author:** Maqcel
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-of-doubled-pairs/solutions/3763458/](https://leetcode.com/problems/array-of-doubled-pairs/solutions/3763458/)

---

# Code
```
class Solution {
  bool canReorderDoubled(List<int> arr) {
    Map<int, int> count = {};
    for (int x in arr) {
      count[x] = (count[x] ?? 0) + 1;
    }

    List<int> b = List.from(arr);
    b.sort((a, b) => a.abs().compareTo(b.abs()));

    for (int x in b) {
      if (count[x] == 0) continue;
      if (count[2 * x] == null || count[2 * x] == 0) return false;

      count[x] = count[x]! - 1;
      count[2 * x] = count[2 * x]! - 1;
    }

    return true;
  }
}

```