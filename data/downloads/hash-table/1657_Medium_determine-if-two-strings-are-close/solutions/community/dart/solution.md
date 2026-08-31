# Dart

**Author:** alexhutcheson
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/2870987/](https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/2870987/)

---

# Intuition

- Strings have to be the same length (trivial).
- String have to use the same set of distinct characters (neither operation allows you to convert to a character that's not already in the string).
- Order doesn't actually matter, since Operation #1 allows you to fully reorder the string.
- The only thing that matters is the set of distinct character frequencies.

# Approach

1. Convert each string to a character-count representation.
2. Loop through the characters to check that the set of distinct characters in each string is the same.
3. Sort the character count representation ($$O(1)$$ because it scales with alphabet size, not input).
4. Loop through the sorted list of frequencies to check that the set of distinct character frequencies is the same.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code

```dart
class Solution {
  bool closeStrings(String word1, String word2) {
    if (word1.length != word2.length) {
      return false;
    }   
    var chars1 = characterFrequency(word1);
    var chars2 = characterFrequency(word2);
    // Check that both strings use the same set of characters.
    for (var i = 0; i <= _z - _a; i++) {
      if ((chars1[i] > 0) != (chars2[i] > 0)) {
        return false;
      }
    }
    // Even though we're calling sort(), it's still an O(1) operation
    // with respect to the input, because characterFrequency returns
    // a list of fixed size.
    chars1.sort();
    chars2.sort();
    for (var i = 0; i <= _z - _a; i++) {
      if (chars1[i] != chars2[i]) {
        return false;
      }
    }
    return true;
  }
  
  // Returns a list of size 26 storing the frequency of each lowercase English letter in word.
  // For example, result[0] stores the count of 'a's in word, result[1] is the count of 'b's, etc.
  List<int> characterFrequency(String word) {
    var result = List.filled(_z - _a + 1, 0);
    for (var c in word.codeUnits) {
      if (c < _a || _z < c) {
        throw ArgumentError('Contains non-lowercase letters', word);
      }
      result[c - _a]++;
    }
    return result;
  }

  final _a = 'a'.codeUnits[0];
  final _z = 'z'.codeUnits[0];
}
```