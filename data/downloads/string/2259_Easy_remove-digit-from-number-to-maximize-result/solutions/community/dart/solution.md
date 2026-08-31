# Dart, bruteforce method but concise.

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/5100728/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/5100728/)

---

# Note
It is not the most optimal solution but it seems just as fast.

# Code
```
class Solution {
  String removeDigit(String number, String digit) {
    return digit.allMatches(number).fold('',
        (maxNum, d) => maxStr(maxNum, number.replaceRange(d.start, d.end, '')));
  }
  String maxStr(String a, String b) => a.compareTo(b) >= 0 ? a : b;
}
```