# Dart

**Author:** alexhutcheson
**Votes:** 1
**Link:** [https://leetcode.com/problems/license-key-formatting/solutions/2863593/](https://leetcode.com/problems/license-key-formatting/solutions/2863593/)

---

# Code
```
class Solution {
  String licenseKeyFormatting(String s, int k) {
    var result = <int>[];
    var currentGroupLength = 0;
    for (var char in s.codeUnits.reversed) {
        if (char == _dash) {
            continue;
        }
        result.add(char);
        currentGroupLength++;
        if (currentGroupLength == k) {
            result.add(_dash);
            currentGroupLength = 0;
        }
    }
    if (!result.isEmpty && result.last == _dash) {
        result.removeLast();
    }
    return String.fromCharCodes(result.reversed).toUpperCase();
  }

  final _dash = '-'.codeUnits[0];
}
```

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$
