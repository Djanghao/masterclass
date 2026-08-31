# the fastest in dart

**Author:** ahmed___
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-duplicate-letters/solutions/4090891/](https://leetcode.com/problems/remove-duplicate-letters/solutions/4090891/)

---

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)
# Code
```
class Solution {
  String removeDuplicateLetters(String s) {
    final counts = List<int>.filled(26, 0); // Use a list for ASCII lowercase letters.
    final exists = List<bool>.filled(26, false);
    final st = <String>[];

    for (final char in s.runes) {
      counts[char - 97]++; // Convert the character to an index.
    }

    for (final char in s.runes) {
      counts[char - 97]--;

      if (exists[char - 97]) continue;

      while (st.isNotEmpty &&
          counts[st.last.runes.single - 97] > 0 &&
          char <= st.last.runes.single
      ) {
        exists[st.removeLast().runes.single - 97] = false;
      }

      st.add(String.fromCharCode(char));
      exists[char - 97] = true;
    }

    return st.join();
  }
}
```