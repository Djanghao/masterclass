# Dart Solution

**Author:** abbos2101
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/5457079/](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/5457079/)

---

```
class Solution {
  String modifyString(String s) {
    final letters = List.generate(26, (i) => String.fromCharCode(i + 97));
    int index = s.indexOf('?');
    while (index != -1) {
      String first = '';
      String second = '';
      if (index > 0) first = s[index - 1];
      if (index < s.length - 1) second = s[index + 1];

      for (int i = 0; i < letters.length; i++) {
        if (first != letters[i] && second != letters[i]) {
          s = s.replaceRange(index, index + 1, letters[i]);
          break;
        }
      }
      index = s.indexOf('?');
    }
    return s;
  }
}
```