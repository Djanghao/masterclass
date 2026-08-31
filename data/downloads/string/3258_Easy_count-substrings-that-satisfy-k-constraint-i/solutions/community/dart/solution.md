# Count Substrings That Satisfy K-Constraint I using Dart 🐐 Prog Lang.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5984938/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5984938/)

---

# Code
```dart []
class Solution {
 int countKConstraintSubstrings(String s, int k) {
  int countSubstring = 0;

  List<String> substringList = [];
  for(int i = 0; i < s.length; i++){
    List<String> innerList = [];
    for(int j = i; j < s.length; j++){
      innerList.add(s[j]);
      substringList.add(innerList.join());
    }
  }

  for(String elem in substringList){
    int countZero = 0;
    int countOne = 0;
    for(int i = 0; i < elem.length; i++){
      if(elem[i] == "0"){
        countZero++;
      }else{
        countOne++;
      }
    }
    if(countOne <= k || countZero <= k){
      countSubstring++;
    }
  }
  
  return countSubstring;
}
}
```