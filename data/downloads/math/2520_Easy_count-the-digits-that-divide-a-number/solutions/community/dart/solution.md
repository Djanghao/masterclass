# Dart

**Author:** alexhutcheson
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/3036602/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/3036602/)

---

# Code
```dart
class Solution {
  int countDigits(int num) {
    var result = 0;
    for (var rest = num; rest > 0; rest ~/= 10) {
      final digit = rest % 10;
      if (num % digit == 0) {
        result++;
      }
    }
    return result;
  }
}
```