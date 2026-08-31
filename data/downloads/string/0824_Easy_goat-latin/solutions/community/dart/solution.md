# Time complexity optimized Dart solution

**Author:** aamirki
**Votes:** 0
**Link:** [https://leetcode.com/problems/goat-latin/solutions/6102479/](https://leetcode.com/problems/goat-latin/solutions/6102479/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create a HashSet with all possible vowels so we can efficiently check whether or not the first letter of each word is a vowel
2. Create a StringBuffer to construct the translated string
3. Create `maxA` which a sequence of "a"s to append to the end of the last word.
4. Split the `sentence` into words
5. Iterate upon each word, on each iteration first check if it is a vowel and if so (or it is a one character word, which behaves the same as a vowel) write to the StringBuffer the full word + "ma". If not, write the substring starting from the second character to the end, then the first character, then "ma". After this, write the "a"s by taking a substring of `maxA` so we only get the proper number of "a" characters. Then, if it is not the last word in `sentences` write a space
6. Convert the StringBuffer to a string and return it

# Complexity
- Time complexity:
$$O(n + m)$$
n - characters in `sentences`
m - words in `sentences`

- Space complexity:
$$O(n + m)$$

# Code
```dart []
import 'dart:collection';

class Solution {
  final _vowels = HashSet<String>();

  Solution() {
    _vowels.addAll(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  }

  String toGoatLatin(String sentence) {
    var translated = StringBuffer('');
    final originalWords = sentence.split(' ');

    final maxA = 'a' * originalWords.length;
    for (var i = 0; i < originalWords.length; i++) {
        final word = originalWords[i];
        final firstLetter = word[0];

        if (_vowels.contains(firstLetter) || word.length == 1) {
            translated.writeAll([word, 'ma']);
        } else {
            translated.writeAll([word.substring(1), firstLetter, 'ma']);
        }
        translated.write(maxA.substring(0, i + 1));
        if (i != originalWords.length - 1) {
            translated.write(' ');
        }
    }
    return translated.toString();
  }
}
```