# Dart

**Author:** ShahbozTuronov
**Votes:** 0
**Link:** [https://leetcode.com/problems/expressive-words/solutions/3500754/](https://leetcode.com/problems/expressive-words/solutions/3500754/)

---

# Complexity
- Time complexity: 100%
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 100%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int expressiveWords(String s, List<String> words) {
    int count = 0;
    for (String word in words) {
      int i = 0, j = 0;
      while (i < s.length && j < word.length) {
        if (s[i] == word[j]) {
          int len1 = getRepeatLength(s, i);
          int len2 = getRepeatLength(word, j);
          if (len1 < 3 && len1 != len2 || len1 >= 3 && len1 < len2) {
            break;
          }
          i += len1;
          j += len2;
        } else {
          break;
        }
      }
      if (i == s.length && j == word.length) {
        count++;
      }
    }
    return count;
  }

  int getRepeatLength(String s, int i) {
    int j = i;
    while (j < s.length && s[j] == s[i]) {
      j++;
    }
    return j - i;
  }
}
```