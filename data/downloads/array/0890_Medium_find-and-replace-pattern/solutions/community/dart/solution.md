# Finding and Replace Pattern using Dart 🐐 Prog Lang.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/5966409/](https://leetcode.com/problems/find-and-replace-pattern/solutions/5966409/)

---

# Code
```dart []
class Solution {
 List<String> findAndReplacePattern(List<String> words, String pattern) {

  List<String> patters = [];

  StringBuffer stringBuffer = StringBuffer();
  List<String> list = [];
  for(int i = 0; i < pattern.length; i++){
    if(!list.contains(pattern[i])){
      stringBuffer.write(i);
      list.add(pattern[i]);
    }else{
      stringBuffer.write(list.indexOf(pattern[i]));
    }
  }

  for(String elem in words){
    StringBuffer stringBufferInner = StringBuffer();
    List<String> listInner = [];
    for(int i = 0; i < elem.length; i++){
      if(!listInner.contains(elem[i])){
        stringBufferInner.write(i);
        listInner.add(elem[i]);
      }else{
        stringBufferInner.write(listInner.indexOf(elem[i]));
      }
    }
    if(stringBuffer.toString() == stringBufferInner.toString()){
      patters.add(elem);
    }
  }

  return patters;
}
}
```