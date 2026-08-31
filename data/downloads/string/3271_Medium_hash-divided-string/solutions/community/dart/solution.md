# Solved with Dart 🐐 with a basic approach 🦀.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/hash-divided-string/solutions/6026155/](https://leetcode.com/problems/hash-divided-string/solutions/6026155/)

---

# Code
```dart []
class Solution {
  String stringHash(String s, int k) {
  List<String> listOfLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  StringBuffer result = StringBuffer();
  int sum = 0;
  for(int i = 1; i <= s.length; i++){
    if(i % k == 0){
      sum += listOfLetters.indexOf(s[i-1]);
      result.write(listOfLetters[sum % 26]);
      sum = 0;
    }else{
      sum += listOfLetters.indexOf(s[i-1]);
    }
  }

  return result.toString();
}
}
```