# Solution using unicode chars position

**Author:** Nomoke
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4353993/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4353993/)

---

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)

# Code
```
class Solution {
  static const a = 97;
  int countCharacters(List<String> words, String chars) {
      final alphabet = List.filled(26, 0);
      int length = 0;

      for (int i = 0; i < chars.length; ++i) {
          final pos = chars[i].codeUnitAt(0) - a;
          alphabet[pos] += 1;
      }

      for (final w in words) {
          final word = List.filled(26, 0);
          for (int i = 0; i < w.length; ++i) {
              final pos = w[i].codeUnitAt(0) - a;
              word[pos] += 1;

              if (alphabet[pos] == 0) break;
              if (word[pos] > alphabet[pos]) break;
              if (i == w.length - 1) length += w.length;
          }
      }

      return length;
  }
}
```