# Dart Solution

**Author:** Maqcel
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-i-win/solutions/3726540/](https://leetcode.com/problems/can-i-win/solutions/3726540/)

---

# Code
```
class Solution {
  bool canIWin(int maxChoosableInteger, int desiredTotal) {
    if ((1 + maxChoosableInteger) * maxChoosableInteger ~/ 2 < desiredTotal) {
      return false;
    }
    var memo = <int, bool>{};
    var used = List<bool>.filled(maxChoosableInteger + 1, false);
    return helper(maxChoosableInteger, desiredTotal, 0, memo, used);
  }

  bool helper(int maxChoosableInteger, int desiredTotal, int state,
      Map<int, bool> memo, List<bool> used) {
    if (memo.containsKey(state)) {
      return memo[state]!;
    }

    for (var i = 1; i <= maxChoosableInteger; i++) {
      var curr = 1 << i;
      if ((state & curr) == 0) {
        if (i >= desiredTotal ||
            !helper(maxChoosableInteger, desiredTotal - i, state | curr, memo, used)) {
          memo[state] = true;
          return true;
        }
      }
    }

    memo[state] = false;
    return false;
  }
}

```