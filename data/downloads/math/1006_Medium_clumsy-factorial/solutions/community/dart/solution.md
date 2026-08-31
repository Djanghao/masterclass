# Dart Solution

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/clumsy-factorial/solutions/3718829/](https://leetcode.com/problems/clumsy-factorial/solutions/3718829/)

---

# Intuition
Repeatedly minus the `x * y / z`, except on the first time.


# Code
```dart
class Solution {
  int clumsy(int n) {
    int multiply_division() {
      var res = n--;
      if (n > 0) {
        res *= n--;
        if (n > 0) {
          res ~/= n--;
        }
      }
      return res;
    }    
    var res = multiply_division();
    if (n > 0)
      res += n--;
    while (n > 0) {
      res -= multiply_division();
      if (n > 0)
        res += n--;
    }
    return res;
  }
}
```