# Checking If a String Can Break Another String using simple approach in Dart 🐐 Prog Lang.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/6039866/](https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/6039866/)

---

# Code
```dart []
class Solution {
bool checkIfCanBreak(String s1, String s2) {
  
  List<String> splitListS1 = s1.split("");
  List<String> splitListS2 = s2.split("");

  splitListS1.sort((a, b) => a.compareTo(b));
  splitListS2.sort((a, b) => a.compareTo(b));

  bool canBreak1 = true;
  bool canBreak2 = true;
  for(int i = 0; i < splitListS1.length; i++){
    int code1 = splitListS1[i].codeUnitAt(0);
    int code2 = splitListS2[i].codeUnitAt(0);

    if(code1 <= code2){
      if(canBreak1){
        canBreak1 = true;
      }
    }else{
      canBreak1 = false;
    }

    if(code1 >= code2){
       if(canBreak2){
        canBreak2 = true;
      }
    }else{
      canBreak2 = false;
    }
  }

  return canBreak1 || canBreak2;
}
}
```