# Reverse Words in Dart ✅

**Author:** codewithdoni
**Votes:** 4
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/3077219/](https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/3077219/)

---



# Code
```
class Solution {
  String reverseWords(String s) {
      String result = s.split(' ').map((e)=>e.split('').reversed.join()).join(' ');
      return result;
  }
}
```