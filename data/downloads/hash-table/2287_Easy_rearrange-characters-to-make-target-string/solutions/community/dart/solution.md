# Rearranging Characters to Make Target String using Dart 🐐 Prog Lang.

**Author:** Abdusalom_16
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/5996279/](https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/5996279/)

---

# Code
```dart []
class Solution {
int rearrangeCharacters(String s, String target) {
  int count = 0;
  List<String> list = [];

  for(int i = 0; i < s.length; i++){
    if(target.contains(s[i])){
      list.add(s[i]);
    }
  }

  for(int i = 0; i < list.length * 100; i++){
    int innerCount = 0;
    for(int j = 0; j < target.length; j++){
      if(list.contains(target[j])){
        innerCount++;
        list.remove(target[j]);
      }

      if(innerCount == target.length){
        count++;
      }
    }

  }

  return count;
}
}
```