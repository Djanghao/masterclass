# Dart Code Beats 100%

**Author:** Isko21
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-sorted-vowel-strings/solutions/3544422/](https://leetcode.com/problems/count-sorted-vowel-strings/solutions/3544422/)

---

# Code
```
class Solution {
    int countVowelStrings(int n) {
        return ((n + 4) * (n + 3) * (n + 2) * (n + 1)) ~/ 24;
    }
}
```