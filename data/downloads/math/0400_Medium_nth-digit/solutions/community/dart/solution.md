# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/nth-digit/solutions/4493418/](https://leetcode.com/problems/nth-digit/solutions/4493418/)

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
  int findNthDigit(int n) {
    // given n = 1000
    var digitLength = 1;
    var digitCount = 9;
    while (n > digitLength * digitCount) {
        n -= digitLength * digitCount;
        digitLength++;
        digitCount *= 10;
    }

    // 1000 > 9
    // n = 991
    // l = 2
    // c = 90

    // 991 > 180
    // n = 811
    // l = 3
    // c = 900

    final number = pow(10, digitLength - 1) + (n - 1) ~/ digitLength;

    // number = ((10 ^ 2) + ((810) ~/ 3))
    // number = 100 + 270
    // number = 379

    final index = (n - 1) % digitLength;

    // index = (811 - 1) % 3
    // index = 810 % 3
    // index = 0

    final numberStr = number.toString();

    // 3 7 0

    final res = numberStr.split('')[index];

    // res = [3, 7, 0][0]
    // res = 3

    return int.parse(res);
  }
}
```