# Dart Solution using Set

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/relocate-marbles/solutions/3739495/](https://leetcode.com/problems/relocate-marbles/solutions/3739495/)

---

# Code
```
class Solution {
  List<int> relocateMarbles(List<int> nums, List<int> moveFrom, List<int> moveTo) {
    final positions = Set<int>();
    for (final pos in nums) positions.add(pos);
    for (int i = 0; i < moveFrom.length; i++) {
      positions.remove(moveFrom[i]);
      positions.add(moveTo[i]);
    }
    final res = positions.toList();
    res.sort();
    return res;
  }
}


```