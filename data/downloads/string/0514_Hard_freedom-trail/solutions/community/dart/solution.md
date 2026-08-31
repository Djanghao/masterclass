# Dart, dp top-down (memoization)

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/freedom-trail/solutions/5079042/](https://leetcode.com/problems/freedom-trail/solutions/5079042/)

---

# Intuition
We need to check 2 possible directions of the ring, forward or reverse. So we do what we usually do in Dynamic Programming: test all the possible combinations. Memoization will help the performance by avoiding unecessary recalculations of the tree of possibilities.

# Code
```
class Solution {
  int findRotateSteps(String ring, String key) {
    Map<(int, int), int> dp = {};

    (int, int) findLetter(int pointer, int direction, String letter) {
      int count = 0;
      while (ring[pointer] != letter) {
        if (pointer >= ring.length - 1 && direction == 1) {
          pointer = -1;
        }
        if (pointer == 0 && direction == -1) {
          pointer = ring.length;
        }
        pointer += direction;
        count++;
      }
      return (count, pointer);
    }

    int getMinSteps(int iKey, int iRing) {
      if (iKey >= key.length) return 0;
      if (dp.containsKey((iKey, iRing))) return dp[(iKey, iRing)]!;

      var (countFwd, pointerFwd) = findLetter(iRing, 1, key[iKey]);
      var (countRev, pointerRev) = findLetter(iRing, -1, key[iKey]);

      countFwd += getMinSteps(iKey + 1, pointerFwd);
      countRev += getMinSteps(iKey + 1, pointerRev);

      return dp[(iKey, iRing)] = min(countFwd, countRev);
    }

    return key.length + getMinSteps(0, 0);
  }
}
```