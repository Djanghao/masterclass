# Dart solution

**Author:** Caypoh23
**Votes:** 0
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/5683553/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/5683553/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  String freqAlphabets(String s) {
    final List<int> indecies = [];
    final result = StringBuffer();
    for (int i = s.length - 1; i >= 0; i--) {
      if (s[i] == '#') {
        indecies.add(int.parse(s[i - 2] + s[i - 1]));
        i -= 2;
      } else {
        indecies.add(int.parse(s[i]));
      }
    }

    indecies.reversed.forEach((value) {
      result.write(String.fromCharCode(value + 96));
    });

    return result.toString();
  }
}

```