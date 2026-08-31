# Removing Trailing Zeros From a String using Dart 🐐 Programming Language.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/5920594/](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/5920594/)

---

# Code
```dart []
class Solution {
 String removeTrailingZeros(String num) {
  List<String> list = num.split("");
  for(int i = list.length-1; i >= 0; i--){
    if(list[i] == "0"){
      list.removeAt(i);
    }else{
      break;
    }
  }

  return list.join();
}

}
```