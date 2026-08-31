# the fastest beats 100%

**Author:** simpleAsSword
**Votes:** 0
**Link:** [https://leetcode.com/problems/frog-jump/solutions/3968966/](https://leetcode.com/problems/frog-jump/solutions/3968966/)

---



# Code
```
class Solution {
  bool canCross(List<int> stones) {
  // Create a map to store reachable positions for each stone
  Map<int, Set<int>> reachablePositions = {for (var stone in stones) stone: {}};
  reachablePositions[0] = {0};  // Initial position
  
  for (var stone in stones) {
    for (var jump in reachablePositions[stone]!) {
      for (var jumpSize = jump - 1; jumpSize <= jump + 1; jumpSize++) {
        if (jumpSize > 0 && reachablePositions.containsKey(stone + jumpSize)) {
          reachablePositions[stone + jumpSize]!.add(jumpSize);
        }
      }
    }
  }
  
  // If the last stone's position is reachable, the frog can cross the river
  return reachablePositions[stones.last]!.isNotEmpty;
}
}
```