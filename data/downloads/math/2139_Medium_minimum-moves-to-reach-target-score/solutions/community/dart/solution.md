# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/5477304/](https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/5477304/)

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
  int minMoves(int target, int maxDoubles) {
    if (maxDoubles == 0) {
        return target - 1;
    }
    var moves = 0;
    while (target != 1) {
        if (target % 2 == 0 && maxDoubles > 0) {
            target = target ~/ 2;
            moves += 1;
            maxDoubles -= 1;
        } else {
            target -= 1;
            moves += 1;
        }
    } 

    return moves;
  }
}
```