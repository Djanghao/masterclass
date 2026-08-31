# Dart 100% beats

**Author:** iftixorrustamovv
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game/solutions/5541885/](https://leetcode.com/problems/stone-game/solutions/5541885/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  bool stoneGame(List<int> piles) {
    int sum = 0;
    for (int i = 0; i < piles.length; i++) {
      sum += piles[i];
    }
    return sum.isOdd ? true : false;
  }
}

```