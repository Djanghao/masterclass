# Dart solution

**Author:** user5542yr
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/4392483/](https://leetcode.com/problems/valid-word-square/solutions/4392483/)

---


# Code
```
class Solution {
bool validWordSquare(List<String> words) {
  for(int i = 0; i < words.length; i++) {
    final word = words[i];
    if(word.length > words.length) {
      return false;
    }
    for(int j = i; j < words.length; j++) {
      String? s1;
      if(word.length > j) {
        s1 = word[j];
      }
      String? s2;
      if(words[j].length > i) {
        s2 = words[j][i];
      }
      if(s1 != s2) {
        return false;
      }
    }
  }
  return true;
}
}
```