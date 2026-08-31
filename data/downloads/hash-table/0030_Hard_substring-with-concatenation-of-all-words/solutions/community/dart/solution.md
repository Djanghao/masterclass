# Check every window, O(nk), O(n)

**Author:** saawhitelife
**Votes:** 0
**Link:** [https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/5082897/](https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/5082897/)

---

# Intuition
Looks like we have to use brute force to check every window to be a combination of words

# Approach
Check every window [i, i + windowSize], where  0 < i < s.length and windowSize = words.length * words.first.length, increment i by 1 because s not necessarily built of words.first.length chunks.

# Complexity
- Time complexity:
$$O(nk)$$, where k is the length of words

- Space complexity:
$$O(n)$$, because in worst case the results array will be of s size

# Code
```
class Solution {
  List<int> findSubstring(String s, List<String> words) {
    if (words.isEmpty) {
      return [];
    }

    final wordLength = words.first.length;
    final windowSize = wordLength * words.length;

    final results = <int>[];

    for (var i = 0; i + windowSize - 1 < s.length; i += 1) {
      final sub = s.substring(i, i + windowSize);

      final windowWords = <String>[];

      for (var j = 0; j < sub.length; j += wordLength) {
        windowWords.add(sub.substring(j, j + wordLength));
      }

      final sortedWords = words.toList()..sort();
      windowWords.sort();

      var found = 0;

      for (var k = 0; k < sortedWords.length; k++) {
        if (sortedWords[k] == windowWords[k]) {
          found += 1;
        }
      }

      if (found == words.length) {
        results.add(i);
      }
    }

    return results;
  }
}
```