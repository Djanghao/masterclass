# Easy Solution For Dart.

**Author:** yash288
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4927323/](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4927323/)

---

# Code
```
class Solution {
  int countSubstrings(String s, String c) {
    int count = 0;
    for (int i = 0; i < s.length; i++) {
      if (s[i] == c){
        count++;
      }
    }
    return count * (count+1)~/2;
  }
}
```