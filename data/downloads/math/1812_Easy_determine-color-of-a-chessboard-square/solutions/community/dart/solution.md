# Easy

**Author:** ali62
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/4668631/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/4668631/)

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
  bool squareIsWhite(String coordinates) {
    Map chessboard = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5,
      'f': 6,
      'g': 7,
      'h': 8
    };
    if (chessboard[coordinates[0]] % 2 == 0 &&
        int.parse(coordinates[1]) % 2 == 0) {
      return false;
    } else if (chessboard[coordinates[0]] % 2 != 0 &&
        int.parse(coordinates[1]) % 2 != 0) {
      return false;
    }
    return true;
  }
}
```