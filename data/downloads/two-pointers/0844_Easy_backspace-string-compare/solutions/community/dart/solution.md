# Iterative approach with comments - O(1) space

**Author:** benottoman
**Votes:** 0
**Link:** [https://leetcode.com/problems/backspace-string-compare/solutions/5604517/](https://leetcode.com/problems/backspace-string-compare/solutions/5604517/)

---

# Complexity
- Time complexity: O(n + m)
  - [n] = s.length
  - [m] = m.length 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  bool backspaceCompare(String s, String t) {
    // We work backwards starting at the end of the strings
    int sIndex = s.length - 1;
    int tIndex = t.length - 1;

    while (sIndex >= 0 || tIndex >= 0) {
      sIndex = nextValidCharIndex(s, sIndex);
      tIndex = nextValidCharIndex(t, tIndex);

      final sChar = sIndex >= 0 ? s[sIndex] : '';
      final tChar = tIndex >= 0 ? t[tIndex] : '';
      if (sChar != tChar) return false;

      sIndex--;
      tIndex--;
    };

    return true;
  }

  // Find the next valid character after performing all "deletes" (skips).
  // 
  // Some cases to keep in mind:
  //    - Single #:                 abc#      
  //    - Multiple # in a row:      abc###           
  //    - Alternating # and char:   a#b#c# 
  int nextValidCharIndex(String string, int index) {
    int backspaces = 0;

    while (index >= 0) {
      // We're at a character that isn't a # and we don't have to perform any more skips,
      // so we've found the next valid character.
      if (backspaces == 0 && string[index] != '#') break;
      // We've found a # so we need to skip 1 more character
      else if (string[index] == '#') backspaces++;
      // The character is not # and [backspaces] is > 0 at this point.
      // Decrement [backspaces] to indicate we've skipped this character.
      // Note: [backspaces] may or may not become zero now and break the loop in the next iteration.
      else backspaces--;

      // This may become negative here if we were unable to find a valid character.
      // And remember that if we've reached this point that essentially the decrementing of [index]
      // means that we're skipping the current character.
      index--;
    }

    return index;
  }
}



```